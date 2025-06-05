import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

export const getAllHuespedHabitacion = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await prisma.huespedHabitacion.findMany({
            where: {
                activo: true,
                ingreso: {
                    id_ingreso: parseInt(id)
                }
            },
            include: {
                huesped: true
            }
        });
        if (result.length === 0) return res.status(404).json({ error: 'Error en huespedes habitacion' });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener huesped habitacion" });
    }
};

export const huespedEnHabitacion = async (req, res) => {
	const { id } = req.params;
	try {
		const huespedActivo = await prisma.huespedHabitacion.findFirst({
			where: {
				fk_huesped: parseInt(id),
				activo: true,
				ingreso: {
					estado: 'Activo'
				}
			},
			include: {
				ingreso: true,
			}
		});

		if(huespedActivo) {
			return res.status(200).json({
				ocupado: true,
				habitacion: huespedActivo.ingreso.fk_habitacion,
				ingresoId: huespedActivo.fk_ingreso,
			});
		} else {
			return res.status(200).json({ ocupado: false });
		}
	} catch (error) {
		console.error("Error al verificar ocupación:", error);
		return res.status(500).json({ error: "Error al verificar ocupación del huésped." });
	}
};
