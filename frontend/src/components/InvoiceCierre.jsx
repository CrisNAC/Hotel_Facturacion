import "../styles/InvoiceStyleEli.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HTTPClient from "../api/HTTPClient.js";

function InvoiceCierre() {
  const client = new HTTPClient();
  const invoiceRef = useRef();
  /**
   * Uso de react-router-dom
   */
  const { id } = useParams();
  const navigate = useNavigate();

  // Apartado ingreso
  const [ingreso, setIngreso] = useState({
    id_ingreso: 0,
    estado: '',
    checkIn: '',
    checkOut: ''
  });
  const [huesped, setHuesped] = useState({
    id_huesped: 0,
    nombre: '',
    apellido: '',
    email: '',
    nacionalidad: '',
    ruc: '',
    telefono: ''
  });
  const [habitacion, setHabitacion] = useState({
    id_habitacion: 0,
    numero: '',
    tipoHabitacion: { nombre: '' }
  });
  const [tarifa, setTarifa] = useState({
    descripcion: '',
    precio: 0
  });
  const [cuenta, setCuenta] = useState({
    id_cuenta: 0,
    consumos: []
  });
  const [usuario, setUsuario] = useState({
    id_usuario: 0
  });

  const [email, setEmail] = useState(huesped.email || '');
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [pdfBlob, setPdfBlob] = useState(null);
  const [showAsientoModal, setShowAsientoModal] = useState(false);


  // Funcionalidad de la pagina
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  /*
   * Cargar datos del ingreso
   */
  useEffect(() => {
    const cargarIngreso = async () => {
      try {
        setLoading(true);
        const res = await client.getIngresoById(Number(id));
        const valor = res.data;

        setIngreso({
          id_ingreso: Number(valor.id_ingreso),
          estado: valor.estado,
          checkIn: valor.checkIn,
          checkOut: valor.checkOut,
        });
        setHuesped({
          id_huesped: Number(valor.huesped.id_huesped),
          nombre: valor.huesped.nombre,
          apellido: valor.huesped.apellido,
          email: valor.huesped.email,
          nacionalidad: valor.huesped.nacionalidad,
          ruc: valor.huesped.ruc,
          telefono: valor.huesped.telefono
        });
        setHabitacion({
          id_habitacion: Number(valor.habitacion.id_habitacion),
          numero: valor.habitacion.numero,
          tipoHabitacion: { nombre: valor.habitacion.tipoHabitacion.nombre }
        });
        setTarifa({
          descripcion: valor.tarifa.descripcion,
          precio: Number(valor.tarifa.precio)
        });
        setCuenta({
          id_cuenta: Number(valor.cuenta?.[0].id_cuenta),
          consumos: valor.cuenta?.[0].consumos
        });
        setUsuario({
          id_usuario: Number(valor.usuario.id_usuario)
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    cargarIngreso()
  }, []);

  // Calcular noches de estadía
  const calcularNoches = (checkIn, checkOut) => {
    if (!checkIn || !checkOut) return 0;
    const unDia = 24 * 60 * 60 * 1000;
    const fechaInicio = new Date(checkIn);
    const fechaFin = new Date(checkOut);
    return Math.round(Math.abs((fechaFin - fechaInicio) / unDia));
  };

  const noches = calcularNoches(ingreso.checkIn, ingreso.checkOut);
  const precioHabitacion = tarifa?.precio;
  const totalHabitacion = noches * precioHabitacion;
  const [condicionVenta, setCondicionVenta] = useState("Contado");

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
      const response = await client.getUltimaFactura();

      const data = await response.data;
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
    condicion_venta: condicionVenta,
    fecha_emision: new Date(),
    total: cuenta?.consumos.reduce((acc, item) => acc + (item.monto || 0), 0) + totalHabitacion,
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
      iva5: iva5 * 5 / 105,
      iva10: iva10 * 10 / 110,
      totalIVA: iva5 * 5 / 105 + iva10 * 10 / 110
    };
  };

  const iva = calcularIVA(detallesFactura);

  const formatToDatabaseFormat = (fechaStr) => {
    const date = new Date(fechaStr);
    return date.toISOString();
  };

  const enviarFactura = async () => {
    console.log(formatToDatabaseFormat(invoiceData.fecha_emision));
    try {
      const response = await client.crearFactura(invoiceData);

      if (response.status !== 200 && response.status !== 201) {
        throw new Error(response.data?.message || 'Error al guardar la factura');
      }

      console.log('Factura registrada:', response.data);
      return response.data;

    } catch (error) {
      setError('Error al guardar factura: ' + error.message);
      console.error('Error al enviar factura:', error);
      throw error; // para que cerrarCuenta lo capture
    }
  };

    /*
   * Navegación
   */
  // Volver a huesped
  const irAHuespedes = () => {
    navigate('/Huespedes');
  };

  // Ir a Detalle Cuenta
  const irADetCuenta = () => {
    navigate(`/DetallesCuenta/${id}`);
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

      const response = await client.enviarFactura(formData);
      console.log('Respuesta del servidor:', response.data);

      setSendSuccess(true);
      setTimeout(() => {
        setShowEmailModal(false);
        irAHuespedes();
      }, 2000);

    } catch (error) {
      const message = error.response?.data?.error || error.message || 'Error al enviar la factura';
      setError('Error al enviar factura: ' + message);
      console.error('Error al enviar factura:', error);
    } finally {
      setSending(false);
    }
  };


  const cerrarCuenta = async () => {
    try {
      // 1. Generar PDF primero
      const blob = await generarPDFBlob();
      setPdfBlob(blob);

      // 2. Guardar la factura en el sistema
      const facturaGuardada = await enviarFactura();

      setShowAsientoModal(true);      
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
  
  const [medioPago, setMedioPago] = useState('');

  const crearAsientoContable = async () => {
    try {
      setLoading(true);
      setError('');

      let asientoData = []; 

      if (condicionVenta === "Credito") {
        asientoData = [
          {
            concepto: `por Pago de factura ${invoiceData.numero_factura}`,
            debe: invoiceData.total,
            haber: null,
            fecha: new Date()
          },
          {
            concepto: `a Documentos por cobrar`,
            debe: null,
            haber: invoiceData.total,
            fecha: new Date()
          }
        ];
      } else if (condicionVenta === "Contado" && medioPago === "Efectivo") {
        asientoData = [
          {
            concepto: `por Pago de factura ${invoiceData.numero_factura}`,
            debe: invoiceData.total,
            haber: null,
            fecha: new Date()
          },
          {
            concepto: `a Caja`,
            debe: null,
            haber: invoiceData.total - iva.totalIVA,
            fecha: new Date()
          },
          {
            concepto: `IVA Débito Fiscal correspondiente a la Factura ${invoiceData.numero_factura}`,
            debe: null,
            haber: Math.ceil(iva.totalIVA),
            fecha: new Date()
          }
        ];
      } else {
        asientoData = [
          {
            concepto: `por Pago de factura ${invoiceData.numero_factura}`,
            debe: invoiceData.total,
            haber: null,
            fecha: new Date()
          },
          {
            concepto: `a Ueno Bank S.A.`,
            debe: null,
            haber: invoiceData.total - iva.totalIVA,
            fecha: new Date()
          },
          {
            concepto: `IVA Débito Fiscal correspondiente a la Factura ${invoiceData.numero_factura}`,
            debe: null,
            haber: iva.totalIVA,
            fecha: new Date()
          }
        ];
      }
      await client.crearAsiento(asientoData);

      setShowAsientoModal(false);
      setShowEmailModal(true);

    } catch (error) {
      setError(error.message);
      console.error('Error al crear asiento:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
  if (showEmailModal && huesped?.email) {
    setEmail(huesped.email);
  }
}, [showEmailModal, huesped]);


  return (
    <div className="invoice" ref={invoiceRef}>
      <div className="invoice-header">
        <div className="hotel-name">Hotel Jazel</div>
        <div className="invoice-title">Factura Electrónica</div>
        <div className="commercial-info">
          Servicios de hospedaje y alojamiento
          <br />
          Av. Dr. Francia, Encarnación, Paraguay
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
          <div><span>Nombre o Razón Social: </span>{huesped.nombre + " " + huesped.apellido}</div>
          <div><span>RUC / Documento de Identidad: </span>{huesped.ruc}</div>
          <div><span>Correo Electrónico: </span>{huesped.email}</div>
          <div><span>Teléfono: </span>{huesped.telefono}</div>
        </div>
        <div className="invoice-details text-start">
          <div><span>Fecha y hora de emisión: </span>{invoiceData.fecha_emision.toLocaleString("es-PY")}</div>
        <div>
          <span>Cond. Venta: </span>
          <label>
            <input
              type="radio"
              name="cond_venta"
              value="Contado"
              checked={condicionVenta === "Contado"}
              onChange={(e) => setCondicionVenta(e.target.value)}
            />
            Contado
          </label>
          <label>
            <input
              type="radio"
              name="cond_venta"
              value="Credito"
              checked={condicionVenta === "Credito"}
              onChange={(e) => setCondicionVenta(e.target.value)}
            />
            Crédito
          </label>
        </div>
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
              <td></td>
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
            <span>{Math.round(iva.iva5).toLocaleString("de-DE")}</span>
            <span><strong>10%</strong></span>
            <span>{Math.round(iva.iva10).toLocaleString("de-DE")}</span>
            <span><strong>TOTAL IVA:</strong> {Math.round(iva.totalIVA).toLocaleString("de-DE")}</span>
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
      {/*Modal para crear asiento*/}
      {showAsientoModal && (
         <div className={`modal-overlay ${showAsientoModal? 'active' : ''}`}>
          <div className="modal-content p-4 bg-white rounded">
            <h4>Metodo de pago</h4>
              <div className="mb-3">
                <label htmlFor="medioPago" className="form-label">Medio de Pago:</label>
                <select
                  id="medioPago"
                  className="form-select"
                  value={medioPago}
                  onChange={(e) => setMedioPago(e.target.value)}
                >
                  <option value="" disabled>Seleccionar método</option>
                  <option value="Efectivo">Efectivo</option>
                  <option value="Transferencia">Banco</option>
                </select>
              </div>
               {error && <div className="alert alert-danger">{error}</div>}
                <div className="d-flex justify-content-end gap-2 mt-3">
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      setShowAsientoModal(false);
                      setError('');
                    }}
                    disabled={loading}
                  >
                    Cancelar
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={crearAsientoContable}
                    disabled={loading || !medioPago}
                  >
                    {loading ? 'Procesando...' : 'Continuar'}
                  </button>
                </div>
            </div>
          </div>
          )}

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

export default InvoiceCierre;