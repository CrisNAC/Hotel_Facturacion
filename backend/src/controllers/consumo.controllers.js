import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

export const getAllConsumos = async (req, res) => {
    try {
        const result = await prisma.consumo.findMany({
            where: {
                activo: true
            }
        });
        if (!result) return res.status(404).json({ error: "Consumos no encontrados" });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener consumos" });
    }
};

export const postConsumo = async (req, res) => {
  console.log("Entrando al controlador POST /consumo"); 

  try {
    console.log("Cuerpo recibido:", req.body); 
    const { descripcion, cantidad, monto, fk_cuenta, fk_usuario } = req.body;

    // Validación de campos
    if (!descripcion || !cantidad || !monto || !fk_cuenta || !fk_usuario) {
      return res.status(400).json({
        error: "Todos los campos son requeridos",
        requiredFields: ["descripcion", "cantidad", "monto", "fk_cuenta", "fk_usuario"]
      });
    }

    // Validar tipos de datos
    if (typeof descripcion !== 'string' || typeof cantidad !== 'number' || typeof monto !== 'number' || typeof fk_cuenta !== 'number' || typeof fk_usuario !== 'number') {
      return res.status(400).json({ error: "Los tipos de datos no son correctos" });
    }

    // Crear el consumo
    const nuevoConsumo = await prisma.consumo.create({
      data: {
        descripcion,
        cantidad,
        monto,
        fk_cuenta,
        fk_usuario,
        activo: true
      }
    });

    res.status(201).json(nuevoConsumo);

  } catch (error) {
    console.error("Error en postConsumo:", error);
    res.status(500).json({
      error: "Error al crear consumo",
      details: error.message
    });
  }
};


export const deleteConsumo = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const result = await prisma.consumo.update({
      where: { id_consumo: id },
      data: { activo: false }
    });
    
    // Devuelve el registro actualizado como JSON
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Función para actualizar la cantidad del consumo
export const actualizarCantidadConsumo = async (req, res) => {
  try {
    // Asegúrate de recibir los parámetros correctamente
    const id = parseInt(req.params.id, 10);  // Asegúrate de que el id sea un número entero
    const { cantidad } = req.body;

    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    // Buscar el consumo por ID
    const consumo = await prisma.consumo.findUnique({
      where: { id_consumo: id }
    });

    if (!consumo) {
      return res.status(404).json({ error: "Consumo no encontrado" });
    }

    // Actualizar la cantidad del consumo
    const result = await prisma.consumo.update({
      where: { id_consumo: id },
      data: { cantidad }
    });

    return res.status(200).json(result);
  } catch (error) {
    console.error('Error al actualizar cantidad:', error);
    res.status(500).json({ error: "Error al actualizar cantidad" });
  }
};


// Función para incrementar la cantidad del consumo
export const incrementarConsumo = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10); // Obtener el id del consumo a incrementar
    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    // Obtener el consumo actual
    const consumo = await prisma.consumo.findUnique({
      where: { id_consumo: id }
    });

    if (!consumo) {
      return res.status(404).json({ error: "Consumo no encontrado" });
    }

    // Incrementar la cantidad en 1
    const nuevaCantidad = consumo.cantidad + 1;
    const nuevoMonto = nuevaCantidad * consumo.precio;

    const result = await prisma.consumo.update({
      where: { id_consumo: id },
      data: { cantidad: nuevaCantidad, monto: nuevoMonto }
    });

    res.status(200).json(result); // Responder con el consumo actualizado
  } catch (error) {
    console.error("Error al incrementar consumo:", error);
    res.status(500).json({ error: "Error al incrementar consumo" });
  }
};

// Función para decrementar la cantidad del consumo
export const decrementarConsumo = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10); // Obtener el id del consumo a decrementar
    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    // Obtener el consumo actual
    const consumo = await prisma.consumo.findUnique({
      where: { id_consumo: id }
    });

    if (!consumo) {
      return res.status(404).json({ error: "Consumo no encontrado" });
    }

    // Decrementar la cantidad en 1 si es mayor que 1
    const nuevaCantidad = consumo.cantidad > 1 ? consumo.cantidad - 1 : 1;
    const nuevoMonto = nuevaCantidad * consumo.precio;

    const result = await prisma.consumo.update({
      where: { id_consumo: id },
      data: { cantidad: nuevaCantidad, monto: nuevoMonto }
    });

    res.status(200).json(result); // Responder con el consumo actualizado
  } catch (error) {
    console.error("Error al decrementar consumo:", error);
    res.status(500).json({ error: "Error al decrementar consumo" });
  }
};
