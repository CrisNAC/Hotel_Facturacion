import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';
import morgan from "morgan";
import sessionRoutes from "./routes/session.routes.js";
import usuarioRoutes from "./routes/usuario.routes.js";
import tipoHabitacionRoutes from "./routes/tipohabitacion.routes.js";
import habitacionesRoutes from "./routes/habitacion.routes.js";
import tarifaRoutes from "./routes/tarifa.routes.js";
import huespedRoutes from "./routes/huesped.routes.js";
import cuentaRoutes from "./routes/cuenta.routes.js";
import consumoRoutes from "./routes/consumo.routes.js";
import facturaRoutes from "./routes/factura.routes.js";
import ingresoRoutes from "./routes/ingreso.routes.js";
import reservaRoutes from "./routes/reserva.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

app.use(cors(
	{
		origin: 'http://localhost:5173'
	}
));  //CONFIGURACION DE POLITICAS DE CORS

app.use('/api/usuario', usuarioRoutes);					//Kisser
app.use('/api/session', sessionRoutes);					//Kisser
app.use('/api/huesped', huespedRoutes);					//Cristian - Kisser (modified)
app.use('/api/tipohabitacion', tipoHabitacionRoutes); 	//Kisser
app.use('/api/habitacion', habitacionesRoutes);			//Kisser
app.use('/api/tarifa', tarifaRoutes)					//Kisser
app.use('/api/cuenta', cuentaRoutes);					//Cristian
app.use('/api/consumo', consumoRoutes);					//Cristian
app.use('/api/facturas', facturaRoutes);				//Cristian
app.use('/api/ingresos', ingresoRoutes);				//Cristian - Kisser (Modified)
app.use('/api/reserva', reservaRoutes);					//Jazmín

app.listen(PORT, () => {
	console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
