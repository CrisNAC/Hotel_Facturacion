import React from "react";
import "./InvoiceStyleEli.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Invoice = () => {
  // Datos de la factura
  const invoiceData = {
    hotelName: "Hotel Jazel",
    activity: "Actividad Comercial",
    address: "Dirección",
    ruc: "1234567",
    timbrado: "12557904",
    vigencia: "12/01/2025",
    invoiceNumber: "001-001-8000915",
    customer: {
      name: "María López",
      document: "3458237",
      email: "marialopez@gmail.com",
      phone: "595981654234"
    },
    invoiceDetails: {
      date: "22/03/2025 15:33:15",
      condition: "Contado",
      currency: "Guarani"
    },
    items: [
      {
        code: "001",
        description: "Habitación Ejecutiva",
        unit: "UNI",
        quantity: 3,
        unitPrice: "150.000",
        discount: "-",
        exempt: "-",
        tax5: "-",
        tax10: "450.000"
      },
      {
        code: "002",
        description: "Habitación Suite",
        unit: "UNI",
        quantity: 2,
        unitPrice: "250.000",
        discount: "-",
        exempt: "-",
        tax5: "-",
        tax10: "500.000"
      },
      {
        code: "101",
        description: "Servicio de Spa Completo",
        unit: "UNI",
        quantity: 1,
        unitPrice: "120.000",
        discount: "10.000",
        exempt: "-",
        tax5: "-",
        tax10: "110.000"
      },
      {
        code: "102",
        description: "Almuerzo Ejecutivo",
        unit: "UNI",
        quantity: 4,
        unitPrice: "45.000",
        discount: "-",
        exempt: "SI",
        tax5: "-",
        tax10: "-"
      },
      {
        code: "103",
        description: "Transporte Aeropuerto",
        unit: "VIAJE",
        quantity: 2,
        unitPrice: "80.000",
        discount: "-",
        exempt: "-",
        tax5: "8.000",
        tax10: "-"
      },
      {
        code: "201",
        description: "Lavandería Express",
        unit: "KG",
        quantity: 5,
        unitPrice: "12.000",
        discount: "2.000",
        exempt: "-",
        tax5: "-",
        tax10: "50.000"
      },
      {
        code: "202",
        description: "Minibar Premium",
        unit: "DÍA",
        quantity: 3,
        unitPrice: "35.000",
        discount: "-",
        exempt: "-",
        tax5: "-",
        tax10: "105.000"
      },
      {
        code: "401",
        description: "Paquete Romántico",
        unit: "UNI",
        quantity: 1,
        unitPrice: "180.000",
        discount: "15.000",
        exempt: "-",
        tax5: "-",
        tax10: "165.000"
      },
      {
        code: "402",
        description: "Paquete Familiar",
        unit: "UNI",
        quantity: 1,
        unitPrice: "320.000",
        discount: "-",
        exempt: "-",
        tax5: "-",
        tax10: "320.000"
      },
      {
        code: "404",
        description: "Tour Ciudad",
        unit: "PERS",
        quantity: 2,
        unitPrice: "75.000",
        discount: "-",
        exempt: "-",
        tax5: "-",
        tax10: "150.000"
      },
      {
        code: "405",
        description: "Late Check-out",
        unit: "HORA",
        quantity: 4,
        unitPrice: "25.000",
        discount: "-",
        exempt: "-",
        tax5: "-",
        tax10: "100.000"
      },
      {
        code: "303",
        description: "Servicio a la Habitación",
        unit: "PEDIDO",
        quantity: 6,
        unitPrice: "18.000",
        discount: "-",
        exempt: "-",
        tax5: "-",
        tax10: "108.000"
      }
    ],

    totals: {
      subtotal: "0  0  2.558.000",
      totalOperation: "2.558.000",
      totalGuaranies: "2.558.000",
      taxLiquidation: "5%     8.000      10%     230.500   TOTAL IVA 238.500"
    }
  };

  const navigate = useNavigate();

  const irADetCuenta = () => {
    navigate('/DetallesCuentas');
};

  return (
    <div className="invoice">
      {/* Encabezado */}
      <div className="invoice-header">
        <div className="hotel-name">{invoiceData.hotelName}</div>
        <div className="invoice-title">Factura Electrónica</div>
        <div className="commercial-info">
          {invoiceData.activity}
          <br />
          {invoiceData.address}
        </div>
        <div className="invoice-meta text-start">
          <div><span>RUC:</span> {invoiceData.ruc}</div>
          <div><span>Timbrado N°:</span> {invoiceData.timbrado}</div>
          <div><span>Inicio Vigencia:</span> {invoiceData.vigencia}</div>
          <div>
            <span>Factura Electrónica<br />N°:</span> {invoiceData.invoiceNumber}
          </div>
        </div>
      </div>
      <br></br>
      {/* Información del cliente */}
      <div className="customer-section">
        <div className="customer-info text-start">
          <div><span>Nombre o Razón Social: </span>{invoiceData.customer.name}</div>
          <div><span>RUC / Documento de Identidad: </span>{invoiceData.customer.document}</div>
          <div><span>Correo Electrónico: </span>{invoiceData.customer.email}</div>
          <div><span>Teléfono: </span>{invoiceData.customer.phone}</div>
        </div>
        <div className="invoice-details text-start">
          <div><span>Fecha y hora de emisión: </span>{invoiceData.invoiceDetails.date}</div>
          <div><span>Cond. Venta: </span>{invoiceData.invoiceDetails.condition}</div>
          <div><span>Moneda: </span>{invoiceData.invoiceDetails.currency}</div>
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
          {invoiceData.items.map((item, index) => (
            <tr className="table-row" key={index}>
              <td>{item.code}</td>
              <td>{item.description}</td>
              <td>{item.unit}</td>
              <td>{item.quantity}</td>
              <td>{item.unitPrice}</td>
              <td>{item.discount}</td>
              <td>{item.exempt}</td>
              <td>{item.tax5}</td>
              <td>{item.tax10}</td>
            </tr>
          ))}

        </tbody>
      </table>
      <br></br>
      {/* Totales */}
      <div className="totals-section">
        <div className="total-row">
          <div className="total-label">SUBTOTAL:</div>
          <div>{invoiceData.totals.subtotal}</div>
        </div>
        <div className="total-row">
          <div className="total-label">TOTAL DE LA OPERACIÓN:</div>
          <div>{invoiceData.totals.totalOperation}</div>
        </div>
        <div className="total-row">
          <div className="total-label">TOTAL EN GUARANÍES:</div>
          <div>{invoiceData.totals.totalGuaranies}</div>
        </div>
        <div className="total-row">
          <div className="total-label">LIQUIDACIÓN IVA:</div>
          <div>{invoiceData.totals.taxLiquidation}</div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center  mt-4" style={{ gap: "30px" }}>
        <button className="btn btn-secondary fw-bold" style={{ width: "150px", height: "40px" }} onClick={irADetCuenta}>Cancelar</button>
        <button className="btn btn-success fw-bold" style={{ width: "150px", height: "40px" }}>Generar</button>
      </div>
    </div>
  );
};

export default Invoice;