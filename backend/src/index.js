import express from "express";

import usuarioRoutes from "./routes/usuario.routes";
import huespedRoutes from "./routes/huesped.routes";


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/usuario', usuarioRoutes);
app.use('/api/huespedes', huespedRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Servidor iniciado"));