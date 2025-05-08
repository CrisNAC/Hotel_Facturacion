import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';
import morgan from "morgan";
import sessionRoutes from "./routes/session.routes.js";
import usuarioRoutes from "./routes/usuario.routes.js";
import huespedRoutes from "./routes/huesped.routes.js";
import tipoHabitacionRoutes from "./routes/tipohabitacion.routes.js";
import tarifaRoutes from "./routes/tarifa.routes.js";
import habitacionesRoutes from "./routes/habitacion.routes.js";
import reservaRoutes from "./routes/reserva.routes.js";
import ingresoRoutes from "./routes/ingreso.routes.js";
import huespedHabitacionRoutes from "./routes/huespedhabitacion.routes.js";
import cuentaRoutes from "./routes/cuenta.routes.js";
import consumoRoutes from "./routes/consumo.routes.js";
import facturaRoutes from "./routes/factura.routes.js";
<<<<<<< HEAD
=======
import ingresoRoutes from "./routes/ingreso.routes.js";
import reservaRoutes from "./routes/reserva.routes.js";
import huespedHabitacion from "./routes/huespedHabitacion.routes.js";
>>>>>>> 2d3ec8465eb17774f50ed45051ad1ef5b4de00a5

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
/*
app.use(cors(
	{
		origin: 'http://localhost:5173'
	}
));  //CONFIGURACION DE POLITICAS DE CORS
*/
app.use(cors({
	origin: 'http://localhost:5173',
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
	credentials: true // si usas cookies
}));

app.use('/api/usuario', usuarioRoutes);					//Kisser
app.use('/api/session', sessionRoutes);					//Kisser
app.use('/api/huesped', huespedRoutes);					//Cristian - Kisser (modified)
app.use('/api/tipohabitacion', tipoHabitacionRoutes); 	//Kisser
app.use('/api/tarifa', tarifaRoutes)					//Kisser
app.use('/api/habitacion', habitacionesRoutes);			//Kisser
app.use('/api/reserva', reservaRoutes);					//Jazmín
app.use('/api/ingresos', ingresoRoutes);				//Cristian - Kisser (Modified)
app.use('/api/huespedhabitacion', huespedHabitacionRoutes); //Jazmín
app.use('/api/cuenta', cuentaRoutes);					//Cristian
app.use('/api/consumo', consumoRoutes);					//Cristian
app.use('/api/facturas', facturaRoutes);				//Cristian
<<<<<<< HEAD
=======
app.use('/api/ingresos', ingresoRoutes);				//Cristian - Kisser (Modified)
app.use('/api/reserva', reservaRoutes);					//Jazmín
app.use('/api/huespedHabitacion', huespedHabitacion);	//Cristian
>>>>>>> 2d3ec8465eb17774f50ed45051ad1ef5b4de00a5

app.listen(PORT, () => {
	console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
