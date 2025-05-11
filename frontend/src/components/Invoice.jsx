import React from 'react';

const Invoice = ({ invoiceData }) => {
  if (!invoiceData) {
    return <div>No hay datos disponibles para la factura.</div>;
  }

  const {
    id_factura,
    fecha_emision,
    total,
    condicion_venta,
    usuario,
    detalles,
    cuenta,
    timbrado
  } = invoiceData;

  const ingreso = cuenta?.ingreso;
  const habitacion = ingreso?.habitacion;
  const tarifa = ingreso?.tarifa;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Factura #{id_factura}</h1>
      <p><strong>Fecha de emisión:</strong> {new Date(fecha_emision).toLocaleDateString()}</p>
      <p><strong>Condición de venta:</strong> {condicion_venta}</p>
      <p><strong>Usuario:</strong> {usuario?.nombre} {usuario?.apellido}</p>
      {habitacion && (
        <p><strong>Habitación:</strong> {habitacion.numero} ({habitacion.tipoHabitacion?.nombre})</p>
      )}
      {tarifa && (
        <p><strong>Tarifa:</strong> {tarifa.descripcion} - {tarifa.precio} Gs.</p>
      )}
      <hr />

      <h2>Detalles</h2>
      {detalles.length > 0 ? (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Descripción</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Descuento</th>
              <th>IVA (%)</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {detalles.map((detalle, index) => (
              <tr key={index}>
                <td>{detalle.descripcion}</td>
                <td>{detalle.cantidad}</td>
                <td>{detalle.precio_unitario}</td>
                <td>{detalle.descuento}</td>
                <td>{detalle.porcentaje_iva}</td>
                <td>
                  {(detalle.cantidad * detalle.precio_unitario - detalle.descuento).toLocaleString()} Gs.
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay detalles en esta factura.</p>
      )}

      <hr />
      <h3>Total: {total.toLocaleString()} Gs.</h3>
    </div>
  );
};

export default Invoice;
