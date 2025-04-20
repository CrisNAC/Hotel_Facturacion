import express from "express";

import usuarioRoutes from "./routes/usuario.routes";
import huespedRoutes from "./routes/huesped.routes";
import cuentaRoutes from "./routes/cuenta.routes";
import consumoRoutes from "./routes/consumo.routes";


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/usuario', usuarioRoutes);
app.use('/api/huesped', huespedRoutes);
app.use('/api/cuenta', cuentaRoutes);
app.use('/api/consumo', consumoRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Servidor iniciado"));