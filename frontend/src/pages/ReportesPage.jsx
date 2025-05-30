import { useState, useEffect } from 'react';
import {
    Box, Typography, Grid, FormControl, InputLabel, Select,
    MenuItem, TextField, Button, Table, TableHead, TableRow,
    TableCell, TableBody, Paper
} from '@mui/material';
import dayjs from 'dayjs';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { saveAs } from 'file-saver'; // Importa saveAs


const categorias = [
    { label: "Ingresos", value: "ingresos" },
    { label: "Reservas", value: "reservas" },
    { label: "Facturas", value: "facturas" },
    { label: "Huéspedes habituales", value: "huespedes" },
];

export default function ReportesPage() {
    const [top3, setTop3] = useState([]);
    const [frecuentes, setFrecuentes] = useState([]);
    const [categoria, setCategoria] = useState('ingresos');
    const [desde, setDesde] = useState(dayjs().startOf('month').format('YYYY-MM-DD'));
    const [hasta, setHasta] = useState(dayjs().endOf('month').format('YYYY-MM-DD'));

    const [datos, setDatos] = useState([]);
    const [resumen, setResumen] = useState(null);

    // Calcular noches de estadía
    const calcularNoches = (checkIn, checkOut) => {
        if (!checkIn || !checkOut) return 0;
        const unDia = 24 * 60 * 60 * 1000;
        const fechaInicio = new Date(checkIn);
        const fechaFin = new Date(checkOut);
        return Math.round(Math.abs((fechaFin - fechaInicio) / unDia));
    };

    const handleBuscar = async () => {
        if (categoria === 'ingresos') {
            const result = await refetch();
            const data = result?.data;

            if (!Array.isArray(data)) {
                console.error("Error al obtener datos de ingresos:", result);
                return;
            }

            const ingresosParseados = data.map(item => {
                const noches = calcularNoches(item.checkIn, item.checkOut);
                const precioNoche = item.tarifa?.precio || 0;
                const tarifaTotal = noches * precioNoche;
                const cuentas = item.cuenta || [];
                const totalConsumos = cuentas.reduce((sum, cuenta) => {
                    const consumos = cuenta.consumos || [];
                    const subtotal = consumos.reduce((subSum, c) => subSum + (c.monto || 0), 0);
                    return sum + subtotal;
                }, 0);
                const total = tarifaTotal + totalConsumos;

                return {
                    habitacion: item.habitacion?.numero || '---',
                    huesped: item.huesped?.nombre + ' ' + item.huesped?.apellido || 'N/A',
                    noches,
                    tarifaPorNoche: precioNoche,
                    tarifaTotal,
                    totalConsumos,
                    total,
                    checkIn: item.checkIn?.split('T')[0],
                    checkOut: item.checkOut?.split('T')[0],
                };
            });

            const totalIngresos = ingresosParseados.reduce((acc, curr) => acc + curr.total, 0);
            const cantidadIngresos = ingresosParseados.length;

            setDatos(ingresosParseados);
            setResumen({
                total: totalIngresos,
                cantidad: cantidadIngresos,
            });
        }
        else if (categoria === 'reservas') {
            const result = await refetchReservas();
            const data = result.data || [];
            console.log(data);
            const reservasParseadas = data.map(r => ({
                huesped: `${r.huesped?.nombre} ${r.huesped?.apellido}`,
                tipo_habitacion: r.tipoHabitacion?.nombre || '---',
                estado: r.estado,
                checkIn: r.check_in?.split('T')[0],
                checkOut: r.check_out?.split('T')[0]
            }));

            const resumenEstado = {
                completadas: data.filter(r => r.estado === 'Completada').length,
                pendientes: data.filter(r => r.estado === 'Pendiente').length,
                canceladas: data.filter(r => r.estado === 'Cancelada').length,
            };
            setDatos(reservasParseadas);
            setResumen(resumenEstado);
        }
        else if (categoria === 'facturas') {
            const result = await refetchFacturas();
            const data = result.data || [];

            const facturasParseadas = data.map(f => ({
                numero: f.numero_factura,
                huesped: `${f.cuenta?.ingreso?.huesped?.nombre} ${f.cuenta?.ingreso?.huesped?.apellido}`,
                fecha: f.fecha_emision?.split('T')[0],
                concepto: f.detalles?.map(d => d.descripcion).join(', ') || '—',
                //concepto: f.detalles?.map((d, i) => <div key={i}>{d.descripcion}</div>) || '—',
                total: f.total || 0,
                condicion: f.condicion_venta || '-------'
            }));

            const totalFacturado = facturasParseadas.reduce((sum, f) => sum + f.total, 0);

            setDatos(facturasParseadas);
            setResumen({ total: totalFacturado });
        }
        else if (categoria === 'huespedes') {
            const result = await refetchHuespedes();
            const data = result.data || [];

            const huespedesParseados = data.map(h => {
                return {
                    nombre: h.nombre_completo,
                    documento: h.numero_documento,
                    telefono: h.telefono || '—',
                    email: h.email || '—',
                    ingresos: h.total_ingresos,
                    reservas: h.total_reservas,
                    ultimoCheckIn: h.ultimo_checkin
                        ? new Date(h.ultimo_checkin).toISOString().split('T')[0]
                        : '—',
                    total: h.total_facturado || 0
                };
            });

            // Ordenar por la suma de ingresos y reservas de forma descendente
            const ordenado = [...huespedesParseados].sort((a, b) => {
                const totalA = a.ingresos + a.reservas;
                const totalB = b.ingresos + b.reservas;
                return totalB - totalA; // Ordena de mayor a menor
            });

            setDatos(huespedesParseados);
            setTop3(ordenado.slice(0, 10));
        }
    }

    const handleExportar = () => {
        if (!datos || datos.length === 0) {
            alert('No hay datos para exportar.');
            return;
        }

        let headers = [];
        let rows = [];
        let fileName = `${categoria}_reporte.csv`;

        if (categoria === 'ingresos') {
            headers = ["N° de habitación", "Huésped", "Noches", "Tarifa por Noche", "Tarifa Total", "Total Consumos", "Total", "Check-in", "Check-out"];
            rows = datos.map(row => [
                row.habitacion,
                row.huesped,
                row.noches,
                row.tarifaPorNoche,
                row.tarifaTotal,
                row.totalConsumos,
                row.total,
                formatDMY(row.checkIn),
                formatDMY(row.checkOut)
            ]);
        } else if (categoria === 'reservas') {
            headers = ["Huésped", "Tipo de habitación", "Estado", "Check-in", "Check-out"];
            rows = datos.map(row => [
                row.huesped,
                row.tipo_habitacion,
                row.estado,
                formatDMY(row.checkIn),
                formatDMY(row.checkOut)
            ]);
        } else if (categoria === 'facturas') {
            headers = ["Número de factura", "Nombre del huésped", "Fecha de emisión", "Concepto", "Monto total", "Condición de venta"];
            rows = datos.map(row => [
                row.numero,
                row.huesped,
                formatDMY(row.fecha),
                Array.isArray(row.concepto) ? row.concepto.join('; ') : row.concepto, // Asegura que el concepto sea string
                row.total,
                row.condicion
            ]);
        } else if (categoria === 'huespedes') {
            // Para huéspedes, puedes decidir si exportar solo el top3 o todos los "datos"
            // Aquí estoy exportando todos los "huespedesParseados" que están en 'datos'
            headers = ["Nombre", "Documento", "Teléfono", "Email", "Ingresos", "Reservas", "Último Check-in", "Total Gastado"];
            rows = datos.map(row => [
                row.nombre,
                row.documento,
                row.telefono,
                row.email,
                row.ingresos,
                row.reservas,
                formatDMY(row.ultimoCheckIn),
                row.total
            ]);
        } else {
            alert('Categoría no soportada para exportación.');
            return;
        }

        const csvContent = [
            headers.join(','), // Unir los encabezados con comas
            ...rows.map(e => e.join(',')) // Unir cada fila con comas
        ].join('\n'); // Unir todas las líneas con saltos de línea

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, fileName);
    };

    const fetchIngresos = async () => {
        const res = await axios.get(`/api/ingresos`, {
            params: {
                desde,
                hasta
            }
        });
        return res.data;
    };

    const fetchReservas = async () => {
        const res = await axios.get(`/api/reserva/fechas`, {
            params: {
                desde,
                hasta
            }
        });
        return res.data;
    };

    const fetchFacturas = async () => {
        const res = await axios.get(`/api/facturas/fechas`, {
            params: {
                desde,
                hasta
            }
        });
        return res.data;
    };

    const fetchHuespedes = async () => {
        const res = await axios.get(`/api/huesped/frecuentes`, {
            params: {
                desde,
                hasta
            }
        });
        return res.data;
    };

    const {
        data: ingresos,
        refetch
    } = useQuery({
        queryKey: ['ingresos', desde, hasta],
        queryFn: fetchIngresos,
        enabled: categoria === 'ingresos'
    });

    const {
        data: reservas,
        refetch: refetchReservas
    } = useQuery({
        queryKey: ['reservas', desde, hasta],
        queryFn: fetchReservas,
        enabled: categoria === 'reservas'
    });

    const {
        data: facturas,
        refetch: refetchFacturas
    } = useQuery({
        queryKey: ['facturas', desde, hasta],
        queryFn: fetchFacturas,
        enabled: categoria === 'facturas'
    });

    const {
        data: huespedes,
        refetch: refetchHuespedes
    } = useQuery({
        queryKey: ['huespedes', desde, hasta],
        queryFn: fetchHuespedes,
        enabled: categoria === 'huespedes'
    });

    useEffect(() => {
        // Limpiar datos y resumen al cambiar de categoría
        setDatos([]);
        setResumen(null);
        setTop3([]); // También limpiar el top3 al cambiar de categoría
    }, [categoria]);

    /**
    * Para cambiar el formato de la fecha a Dia/Mes/Año
    * @param {*} dateString Se le pasa el una fecha
    * @returns Retorna la fecha modifica en caso de exito o si no en caso de fracaso -
    */
    const formatDMY = (dateString) => {
        if (!dateString) return '—';
        try {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('es-ES', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                timeZone: 'UTC'
            }).format(date);
        } catch {
            return '—';
        }
    };

    return (
        <>
            <Box sx={{ p: 4, maxWidth: '1140px', mx: 'auto' }}>
                <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Reportes del sistema
                </Typography>

                {/* Filtros */}
                <Paper sx={{ p: 3, mb: 3 }}>
                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel>Categoría</InputLabel>
                                <Select
                                    value={categoria}
                                    label="Categoría"
                                    onChange={(e) => setCategoria(e.target.value)}
                                >
                                    {categorias.map(cat => (
                                        <MenuItem key={cat.value} value={cat.value}>{cat.label}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <TextField
                                label="Desde"
                                type="date"
                                fullWidth
                                value={desde}
                                onChange={(e) => setDesde(e.target.value)}
                                InputLabelProps={{ shrink: true }} // Para que el label no se superponga
                            />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <TextField
                                label="Hasta"
                                type="date"
                                fullWidth
                                value={hasta}
                                onChange={(e) => setHasta(e.target.value)}
                                InputLabelProps={{ shrink: true }} // Para que el label no se superponga
                            />
                        </Grid>

                        <Grid item xs={12} sm={2}>
                            <Button variant="contained" fullWidth onClick={handleBuscar}>
                                Buscar
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={3} sx={{ mt: 1, ml: 'auto' }}>
                            <Button
                                variant="outlined"
                                color="success"
                                fullWidth
                                onClick={handleExportar}
                                disabled={!datos || datos.length === 0 || !['ingresos', 'reservas', 'facturas', 'huespedes'].includes(categoria)}
                            >
                                Exportar a CSV
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>

                {/* Tabla de Datos Principal */}
                <Paper sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ p: 2 }}>
                        {categorias.find(c => c.value === categoria)?.label}
                    </Typography>
                    <Table>
                        <TableHead sx={{
                            backgroundColor: '#E6E6E6',
                            '& th': {
                                textAlign: 'center',
                                py: 0.8,
                            }
                        }}>
                            <TableRow>
                                {categoria === "ingresos" && <>
                                    <TableCell>N° de habitación</TableCell>
                                    <TableCell>Huésped</TableCell>
                                    <TableCell>Monto</TableCell>
                                    <TableCell>Check-in</TableCell>
                                    <TableCell>Check-out</TableCell>
                                </>}
                                {categoria === "reservas" && <>
                                    <TableCell>Huésped</TableCell>
                                    <TableCell>Tipo de habitación</TableCell>
                                    <TableCell>Estado</TableCell>
                                    <TableCell>Check-in</TableCell>
                                    <TableCell>Check-out</TableCell>
                                </>}
                                {categoria === "facturas" && <>
                                    <TableCell>Número de factura</TableCell>
                                    <TableCell>Nombre del huésped</TableCell>
                                    <TableCell>Fecha de emisión</TableCell>
                                    <TableCell>Concepto</TableCell>
                                    <TableCell>Monto total</TableCell>
                                    <TableCell>Condición de venta</TableCell>
                                </>}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {datos.map((row, i) => (
                                <TableRow key={i} sx={{ '& td': { textAlign: 'center', py: 0.5 } }}>
                                    {categoria === "ingresos" && <>
                                        <TableCell>{row.habitacion}</TableCell>
                                        <TableCell>{row.huesped}</TableCell>
                                        <TableCell>{row.total.toLocaleString("de-DE")}</TableCell>
                                        <TableCell>{formatDMY(row.checkIn)}</TableCell>
                                        <TableCell>{formatDMY(row.checkOut)}</TableCell>
                                    </>}
                                    {categoria === "reservas" && <>
                                        <TableCell>{row.huesped}</TableCell>
                                        <TableCell>{row.tipo_habitacion}</TableCell>
                                        <TableCell>{row.estado}</TableCell>
                                        <TableCell>{formatDMY(row.checkIn)}</TableCell>
                                        <TableCell>{formatDMY(row.checkOut)}</TableCell>
                                    </>}
                                    {categoria === "facturas" && <>
                                        <TableCell>{row.numero}</TableCell>
                                        <TableCell>{row.huesped}</TableCell>
                                        <TableCell>{formatDMY(row.fecha)}</TableCell>
                                        <TableCell>
                                            {Array.isArray(row.concepto) ? row.concepto.join(', ') : row.concepto}
                                        </TableCell>
                                        <TableCell>
                                            {(row.total || 0).toLocaleString("de-DE")}
                                        </TableCell>
                                        <TableCell>{row.condicion}</TableCell>
                                    </>}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>

                {/* Top 3 Huéspedes Frecuentes (si aplica) */}
                {categoria === 'huespedes' && top3.length > 0 && (
                    <Paper sx={{ p: 2, mt: 4 }}>
                        <Typography variant="h6" gutterBottom>
                            Top 10 huéspedes más frecuentes
                        </Typography>
                        <Table>
                            <TableHead sx={{
                                backgroundColor: '#E6E6E6',
                                '& th': {
                                    textAlign: 'center',
                                    py: 0.8,
                                }
                            }}>
                                <TableRow>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Documento</TableCell>
                                    <TableCell>Teléfono</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Ingresos</TableCell>
                                    <TableCell>Reservas</TableCell>
                                    <TableCell>Último check-in</TableCell>
                                    <TableCell>Total Gastado</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {top3.map((h, i) => (
                                    <TableRow key={i} sx={{ '& td': { textAlign: 'center', py: 0.5 } }}>
                                        <TableCell>{h.nombre}</TableCell>
                                        <TableCell>{h.documento}</TableCell>
                                        <TableCell>{h.telefono}</TableCell>
                                        <TableCell>{h.email}</TableCell>
                                        <TableCell>{h.ingresos}</TableCell>
                                        <TableCell>{h.reservas}</TableCell>
                                        <TableCell>{formatDMY(h.ultimoCheckIn)}</TableCell>
                                        <TableCell>{(h.total || 0).toLocaleString("de-DE")}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                )}

                {/* Resumen */}
                {resumen && (
                    <Paper sx={{ p: 2, mt: 3, backgroundColor: '#C6EAD6' }}>
                        {categoria === "ingresos" && (
                            <>
                                <Typography variant="subtitle1">
                                    <strong>Ingresos registrados:</strong> {resumen.cantidad}
                                </Typography>
                                <Typography variant="subtitle1">
                                    <strong>Monto:</strong> Gs. {resumen.total ? resumen.total.toLocaleString() : 0}
                                </Typography>
                            </>
                        )}
                        {categoria === "reservas" && (
                            <>
                                <Typography variant="subtitle1">
                                    <strong>Reservas completadas:</strong> {resumen.completadas}
                                </Typography>
                                <Typography variant="subtitle1">
                                    <strong>Reservas pendientes:</strong> {resumen.pendientes}
                                </Typography>
                                <Typography variant="subtitle1">
                                    <strong>Reservas canceladas:</strong> {resumen.canceladas}
                                </Typography>
                            </>
                        )}
                        {categoria === "facturas" && (
                            <Typography variant="subtitle1">
                                <strong>Total facturado:</strong> Gs. {resumen.total ? resumen.total.toLocaleString() : 0}
                            </Typography>
                        )}
                    </Paper>
                )}
            </Box>
        </>
    );
}
