import React, { useContext, useRef, useState, useEffect } from "react";
import "../styles/InvoiceStyleEli.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { jsPDF } from "jspdf";
import { HuespedesActivosContext } from "../context/HuespedesActivosContexto.jsx";

const Invoice = ({ ingresosOriginales, refresh }) => {
  const {
    setMainPage,
    setVistaFactura,
    huespedSeleccionado,
    datosFacturacion,
  } = useContext(HuespedesActivosContext);
  const invoiceRef = useRef();

  const irADetCuenta = () => {
    setMainPage(false);
    setVistaFactura(false);
  };
  
  const huesped = huespedSeleccionado?.huesped || {};
  const cuenta = huespedSeleccionado?.cuenta?.[0] || {};
  const tarifa = huespedSeleccionado?.tarifa || {};
  const habitacion = huespedSeleccionado?.habitacion || {};
  const [error, setError] = useState('');
  const [email, setEmail] = useState(huesped.email || '');
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [pdfBlob, setPdfBlob] = useState(null);
    
  // Calcular noches de estadía
  const calcularNoches = (checkIn, checkOut) => {
    if (!checkIn || !checkOut) return 0;
    const unDia = 24 * 60 * 60 * 1000;
    const fechaInicio = new Date(checkIn);
    const fechaFin = new Date(checkOut);
    return Math.round(Math.abs((fechaFin - fechaInicio) / unDia));
  };
  
  const noches = calcularNoches(huespedSeleccionado.checkIn, huespedSeleccionado.checkOut);
  const precioHabitacion = tarifa?.precio;
  const totalHabitacion = noches * precioHabitacion;
  
  const itemEstadia = {
    id_consumo: habitacion?.id_habitacion,
    Productos: { 
      descripcion: habitacion?.tipoHabitacion?.nombre,
      precio_unitario: precioHabitacion
    },
    cantidad: noches,
    monto: totalHabitacion
  };
  
  const [numeroFactura, setNumeroFactura] = useState(null);

  const obtenerNumeroFactura = async () => {
    try {
      setError('');
      
      const response = await fetch(`http://localhost:4000/api/facturas/ultimafactura`, {
        method: 'GET',
        cache: 'no-store'
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Error al obtener número de factura');
      }

      const data = await response.json();
      setNumeroFactura(data.siguienteNumeroFactura);

    } catch (error) {
      setError('Error al obtener número de factura: ' + error.message);
    } 
  };

  const invoiceItems = [itemEstadia, ...(cuenta?.consumos || [])];

  const detallesFactura = invoiceItems.map(item => ({
    descripcion: item.Productos.descripcion.trim(),
    cantidad: item.cantidad,
    precio_unitario: item.Productos.precio_unitario,
    descuento: 0,
    porcentaje_iva: item.Productos.porcentaje_iva ?? 10
  }));

  const invoiceData = {
    fk_cuenta: cuenta.id_cuenta,
    condicion_venta: "Contado",
    fecha_emision: new Date().toLocaleString(),
    total: cuenta?.consumos.reduce((acc, item) => acc + (item.monto|| 0), 0) + totalHabitacion,
    numero_factura: numeroFactura ? "001-001-" + numeroFactura.toString().padStart(7, "0") : "Cargando...",
    detalles: detallesFactura || [],
  };

  const calcularIVA = (detalles) => {
    let iva5 = 0, iva10 = 0;
    detalles.forEach(item => {
      const totalItem = item.precio_unitario * item.cantidad;
      if (item.porcentaje_iva === 5) iva5 += totalItem;
      else if (item.porcentaje_iva === 10) iva10 += totalItem;
    });
    return {
      iva5: Math.round(iva5 * 5 / 105),
      iva10: Math.round(iva10 * 10 / 110),
      totalIVA: Math.round(iva5 * 5 / 105 + iva10 * 10 / 110)
    };
  };

  const iva = calcularIVA(detallesFactura);

  const handleDownload = () => {
    const element = document.querySelector(".invoice");
    const noPrintElements = document.querySelectorAll(".no-print");
    noPrintElements.forEach(el => el.style.visibility = "hidden");

    import("html2pdf.js").then((html2pdf) => {
      html2pdf.default()
        .set({
          margin: 0,
          filename: `factura-${invoiceData.numero_factura}.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
        })
        .from(element)
        .save()
        .then(() => {
          noPrintElements.forEach(el => el.style.visibility = "visible");
        });
    });
  };
  /*const enviarFactura = async () => {
  try {
    const response = await fetch('http://localhost:4000/api/facturas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(invoiceData)
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error al guardar la factura');
    }

    const data = await response.json();
    alert('Factura guardada con éxito');
    console.log('Factura registrada:', data);
    
    // opcional: redirigir o limpiar vista
    irADetCuenta();

  } catch (error) {
    setError('Error al guardar factura: ' + error.message);
    console.error('Error al enviar factura:', error);
  }
};*/
const enviarFactura = async () => {
  try {
    const response = await fetch('http://localhost:4000/api/facturas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(invoiceData)
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error al guardar la factura');
    }

    const data = await response.json();
    console.log('Factura registrada:', data);
    
    return data; // <- ESTO ES IMPORTANTE

  } catch (error) {
    setError('Error al guardar factura: ' + error.message);
    console.error('Error al enviar factura:', error);
    throw error; // para que cerrarCuenta lo capture
  }
};

  const irAHuespedes = () => {
    setMainPage(true);
    setVistaFactura(false);
  };

  const generarPDFBlob = async () => {
  // 1. Ocultar elementos manualmente antes de generar el PDF
  const elementsToHide = [
    ...document.querySelectorAll('.no-print'),
    ...document.querySelectorAll('.modal-overlay'),
    ...document.querySelectorAll('.action-buttons-container'),
    ...document.querySelectorAll('.btn-cancelar'),
    ...document.querySelectorAll('.btn-generar-factura')
  ];
  
  const originalStyles = elementsToHide.map(el => {
    const style = {
      display: el.style.display,
      visibility: el.style.visibility
    };
    el.style.display = 'none';
    el.style.visibility = 'hidden';
    return style;
  });

  // 2. Agregar clase al body
  document.body.classList.add('generando-pdf');

  try {
    const element = invoiceRef.current;
    const opt = {
      margin: 0,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { 
        scale: 2,
        ignoreElements: (el) => {
          return el.classList?.contains('no-print') || 
                 el.classList?.contains('modal-overlay') ||
                 el.classList?.contains('action-buttons-container') ||
                 el.classList?.contains('btn-cancelar') ||
                 el.classList?.contains('btn-generar-factura');
        }
      },
      jsPDF: { unit: "pt", format: "a4", orientation: "portrait" }
    };

    const html2pdf = await import("html2pdf.js");
    return await html2pdf.default()
      .set(opt)
      .from(element)
      .outputPdf('blob');
  } finally {
    // 3. Limpieza - Restaurar estilos y remover clase
    document.body.classList.remove('generando-pdf');
    elementsToHide.forEach((el, index) => {
      el.style.display = originalStyles[index].display;
      el.style.visibility = originalStyles[index].visibility;
    });
  }
};


  const enviarFacturaPorCorreo = async () => {
    try {
      setSending(true);
      setError('');
      
      const blob = await generarPDFBlob();
      setPdfBlob(blob);

      const formData = new FormData();
      formData.append('archivo', blob, `factura-${invoiceData.numero_factura}.pdf`);
      formData.append('email', email);

      const response = await fetch('http://localhost:4000/api/facturas/enviar', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Error al enviar la factura');
      }

      setSendSuccess(true);
      setTimeout(() => {
        setShowEmailModal(false);
        irAHuespedes(); 
      }, 2000);
    } catch (error) {
      setError('Error al enviar factura: ' + error.message);
      console.error('Error al enviar factura:', error);
    } finally {
      setSending(false);
    }
  };

  const handleGenerarFactura = async () => {
    try {
      const blob = await generarPDFBlob();
      setPdfBlob(blob);
      setShowEmailModal(true);
      setSendSuccess(false);
    } catch (error) {
      setError('Error al generar PDF: ' + error.message);
    }
  };

  const cerrarCuenta = async () => {
  try {
    // 1. Generar PDF primero
    const blob = await generarPDFBlob();
    setPdfBlob(blob);
    
    // 2. Guardar la factura en el sistema
    const facturaGuardada = await enviarFactura();
    
    // 3. Mostrar modal para enviar por correo
    setShowEmailModal(true);
    setSendSuccess(false);

    return facturaGuardada;
  } catch (error) {
    console.error('Error en cerrarCuenta:', error);
    setError('Error al procesar factura: ' + error.message);
    alert('Error al procesar factura');
    throw error;
  }
};

  useEffect(() => {
    obtenerNumeroFactura();
  }, []);

  return (
    <div className="invoice" ref={invoiceRef}>     
      <div className="invoice-header">
        <div className="hotel-name">Hotel Jazel</div>
        <div className="invoice-title">Factura Electrónica</div>
        <div className="commercial-info">
          Servicios de hospedaje y alojamiento
          <br />
          Av. Dr. Francia, Encarnación, Paraguay Comercial
        </div>
        <div className="invoice-meta text-start">
          <div><span>RUC:</span> 80000519-8</div>
          <div><span>Timbrado N°:</span> 12557904</div>
          <div><span>Inicio Vigencia:</span> 01/01/2025</div>
          <div>
            <span>Factura Electrónica<br />N°:</span> {invoiceData.numero_factura}
          </div>
        </div>
      </div>
      <br></br>
      
      {/* Información del cliente */}
      <div className="customer-section">
        <div className="customer-info text-start">
          <div><span>Nombre o Razón Social: </span>{huesped.nombre + " "+ huesped.apellido}</div>
          <div><span>RUC / Documento de Identidad: </span>{huesped.ruc}</div>
          <div><span>Correo Electrónico: </span>{huesped.email}</div>
          <div><span>Teléfono: </span>{huesped.telefono}</div>
        </div>
        <div className="invoice-details text-start">
          <div><span>Fecha y hora de emisión: </span>{invoiceData.fecha_emision}</div>
          <div><span>Cond. Venta: </span>{invoiceData.condicion_venta}</div>
          <div><span>Moneda: </span>Guarani</div>
        </div>
      </div>
      <br></br>
      
      {/* Tabla de items */}
      <table className="items-table">
        <thead>
          <tr className="table-header table-bordered">
            <th>Código</th>
            <th>Descripción</th>
            <th>Unidad</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Descuentos</th>
            <th>Exentas</th>
            <th>5%</th>
            <th>10%</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.detalles.map((item, index) => (
            <tr className="table-row" key={index}>
              <td>{'0' + (index + 1)}</td>
              <td>{item.descripcion || "Sin descripción"}</td>
              <td>UNI</td>
              <td>{item.cantidad}</td>
              <td className="text-end">{item.precio_unitario.toLocaleString("de-DE")}</td>
              <td>{item.descuento}</td>
              <td className="text-end">{item.porcentaje_iva === 0 ? (item.precio_unitario * item.cantidad).toLocaleString("de-DE") : 0}</td>
              <td className="text-end">{item.porcentaje_iva === 5 ? (item.precio_unitario * item.cantidad).toLocaleString("de-DE") : 0}</td>
              <td className="text-end">{item.porcentaje_iva === 10 ? (item.precio_unitario * item.cantidad).toLocaleString("de-DE") : 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      
      {/* Totales */}
      <div className="totals-section">
        <div className="total-row">
          <div className="total-label">SUBTOTAL:</div>
          <div>{invoiceData.total.toLocaleString("de-DE")}</div>
        </div>
        <div className="total-row">
          <div className="total-label">TOTAL DE LA OPERACIÓN:</div>
          <div>{invoiceData.total.toLocaleString("de-DE")}</div>
        </div>
        <div className="total-row">
          <div className="total-label">TOTAL EN GUARANÍES:</div>
          <div>{invoiceData.total.toLocaleString("de-DE")}</div>
        </div>
        <div className="total-row d-flex justify-content-between">
            <div className="d-flex justify-content-between w-100">
              <span><strong>LIQUIDACIÓN IVA:</strong></span>
              <span><strong>5%</strong></span>
              <span>{iva.iva5.toLocaleString("de-DE")}</span>
              <span><strong>10%</strong></span>
              <span>{iva.iva10.toLocaleString("de-DE")}</span>
              <span><strong>TOTAL IVA:</strong> {iva.totalIVA.toLocaleString("de-DE")}</span>
            </div>
        </div>
      </div>
      
      {/* Botones de acción */}
      <div className="d-flex justify-content-center align-items-center mt-4" style={{ gap: "30px" }}>
        <div className="action-buttons-container no-print">
          <button 
            className="btn btn-secondary fw-bold btn-cancelar" 
            style={{ width: "150px", height: "40px" }} 
            onClick={irADetCuenta}
          >
            Cancelar
          </button>
          <button 
            className="btn btn-success fw-bold btn-generar-factura" 
            style={{ width: "150px", height: "40px" }} 
            onClick={cerrarCuenta}
          >
            Generar Factura
          </button>
        </div>
      </div>
      
      {/* Modal para enviar por correo */}
      {showEmailModal && (
        <div className={`modal-overlay ${showEmailModal ? 'active' : ''}`}>
          <div className="modal-content p-4 bg-white rounded">
            <h4>Enviar Factura por Correo</h4>
            
            {sendSuccess ? (
              <div className="alert alert-success">
                Factura enviada exitosamente a {email}
              </div>
            ) : (
              <>
                <div className="mb-3">
                  <label className="form-label">Correo electrónico:</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                {error && <div className="alert alert-danger">{error}</div>}
                
                <div className="d-flex justify-content-end gap-2 mt-3">
                  <button 
                    className="btn btn-secondary"
                    onClick={() => setShowEmailModal(false)}
                    disabled={sending}
                  >
                    Cancelar
                  </button>
                  <button 
                    className="btn btn-primary"
                    onClick={enviarFacturaPorCorreo}
                    disabled={sending || !email}
                  >
                    {sending ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Enviando...
                      </>
                    ) : 'Enviar Factura'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Invoice;