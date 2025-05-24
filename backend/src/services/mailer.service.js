import { getFacturaById } from '../controllers/factura.controllers.js'; // si tienes una utilidad para obtener la factura
//import { generarPDF } from '../utils/pdfGenerator.js';
import nodemailer from 'nodemailer';

export const enviarFacturaPorCorreo = async (idFactura, emailDestino) => {
  const factura = await getFacturaById(idFactura); // o usa Prisma directamente
  const pdfBuffer = await generarPDF(factura);

  const transporter = nodemailer.createTransport({
    service: 'Gmail', // o el que uses
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: '"Hotel Gestión" <tuhotel@example.com>',
    to: emailDestino,
    subject: `Factura N° ${factura.numero_factura}`,
    text: 'Adjunto encontrarás tu factura en formato PDF.',
    attachments: [
      {
        filename: `Factura-${factura.numero_factura}.pdf`,
        content: pdfBuffer
      }
    ]
  });
};
