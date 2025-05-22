import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

export const getAllConsumos = async (req, res) => {
    try {
        const result = await prisma.consumo.findMany({
            where: {
                id_cuenta: cuentaId,
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

    const { fk_producto, cantidad, monto, fk_cuenta, fk_usuario } = req.body;

    if (!fk_producto || !cantidad || !monto || !fk_cuenta || !fk_usuario) {
      return res.status(400).json({
        error: "Todos los campos son requeridos",
        requiredFields: ["fk_producto", "cantidad", "monto", "fk_cuenta", "fk_usuario"]
      });
    }

    const nuevoConsumo = await prisma.consumo.create({
      data: {
        fk_producto,
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
      error: "Error al crear consumo: No se pudo crear el consumo",
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
// Función para actualizar la cantidad y monto del consumo
export const actualizarCantidadConsumo = async (req, res) => {
  try {
    // Validar y parsear parámetros
    const id = parseInt(req.params.id, 10);
    const { cantidad } = req.body;

    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    if (!cantidad || cantidad < 1) {
      return res.status(400).json({ error: "Cantidad inválida" });
    }

    // Buscar el consumo con el producto relacionado
    const consumo = await prisma.consumo.findUnique({
      where: { id_consumo: id },
      include: {
        Productos: true // Incluir el producto relacionado
      }
    });

    if (!consumo) {
      return res.status(404).json({ error: "Consumo no encontrado" });
    }

    // Calcular nuevo monto basado en el precio unitario del producto
    const precioUnitario = consumo.Productos?.precio_unitario || consumo.monto / (consumo.cantidad || 1);
    const nuevoMonto = precioUnitario * cantidad;

    // Actualizar ambos campos (cantidad y monto)
    const result = await prisma.consumo.update({
      where: { id_consumo: id },
      data: { 
        cantidad,
        monto: nuevoMonto
      }
    });

    return res.status(200).json(result);
  } catch (error) {
    console.error('Error al actualizar consumo:', error);
    res.status(500).json({ 
      error: "Error al actualizar consumo",
      details: error.message 
    });
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
