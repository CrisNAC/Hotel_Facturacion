import { express } from "express";

import { usuarioRoutes } from "./routes/usuario.routes";


const app = express();
app.use(express.json());

app.use('/api/usuario', usuarioRoutes);
app.use('/api/huespedes');

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Servidor iniciado"));