import { useState } from 'react';
import {
    Box, Typography, Grid, FormControl, InputLabel, Select,
    MenuItem, TextField, Button, Table, TableHead, TableRow,
    TableCell, TableBody, Paper
} from '@mui/material';
import dayjs from 'dayjs';
import NavBar from '../components/navbar';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const categorias = [
    { label: "Ingresos", value: "ingresos" },
    { label: "Reservas", value: "reservas" },
    { label: "Facturas", value: "facturas" },
    { label: "Huéspedes habituales", value: "huespedes" },
];

export default function ReportesPage() {
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
            const { data } = await refetch();

            const ingresosParseados = data.map(item => {
                const noches = calcularNoches(item.checkIn, item.checkOut);
                console.log("Noches:", noches);
                const precioNoche = item.tarifa?.precio || 0;
                console.log("Precio por noche:", precioNoche);
                const tarifaTotal = noches * precioNoche;
                console.log("Tarifa total:", tarifaTotal);
                const id_ingreso = item.ingreso?.id_ingreso || 0;
                console.log("Ingreso actual:", id_ingreso);
                const consumos = item.cuenta?.consumos || [];
                console.log("Consumos:", consumos);
                const totalConsumos = consumos.reduce((sum, c) => sum + (c.monto || 0), 0);
                console.log("Total consumos:", totalConsumos);
                const total = tarifaTotal + totalConsumos;

                return {
                    habitacion: item.habitacion?.numero || 'N/A',
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

            setDatos(ingresosParseados);
            setResumen({ total: totalIngresos });

        } else {
            const resumenes = {
                ingresos: { total: 150 },
                reservas: { total: 1 },
                facturas: { total: 150 },
                huespedes: { total: 5 },
            };

            setDatos(mock[categoria]);
            setResumen(resumenes[categoria]);
        }
    };

    const handleExportar = () => {
        alert("Exportar a PDF o Excel (implementación futura)");
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

    const {
        data: ingresos,
        isLoading,
        error,
        refetch
    } = useQuery({
        queryKey: ['ingresos', desde, hasta],
        queryFn: fetchIngresos,
        enabled: categoria === 'ingresos'
    });

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
            <NavBar />
            <Box sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Reportes del sistema
                </Typography>

                {/* Filtros */}
                <Grid container spacing={2} sx={{ mb: 2 }}>
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
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <TextField
                            label="Hasta"
                            type="date"
                            fullWidth
                            value={hasta}
                            onChange={(e) => setHasta(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12} sm={2}>
                        <Button variant="contained" fullWidth onClick={handleBuscar}>
                            Buscar
                        </Button>
                    </Grid>
                </Grid>

                {/* Botón de exportar */}
                <Box sx={{ mb: 2 }}>
                    <Button variant="outlined" color="success" onClick={handleExportar}>
                        Exportar a PDF / Excel
                    </Button>
                </Box>

                {/* Tabla */}
                <Paper sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ p: 2 }}>
                        {categorias.find(c => c.value === categoria)?.label}
                    </Typography>

                    <Table>
                        <TableHead>
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
                                    <TableCell>Número</TableCell>
                                    <TableCell>Fecha</TableCell>
                                    <TableCell>Total</TableCell>
                                </>}
                                {categoria === "huespedes" && <>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Reservas hechas</TableCell>
                                </>}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {datos.map((row, i) => (
                                <TableRow key={i}>
                                    {categoria === "ingresos" && <>
                                        <TableCell>{row.habitacion}</TableCell>
                                        <TableCell>{row.huesped}</TableCell>
                                        <TableCell>{row.total.toLocaleString("de-DE")}</TableCell>
                                        <TableCell>{formatDMY(row.checkIn)}</TableCell>
                                        <TableCell>{formatDMY(row.checkOut)}</TableCell>
                                    </>}
                                    {categoria === "reservas" && <>
                                        <TableCell>{row.fecha}</TableCell>
                                        <TableCell>{row.huesped}</TableCell>
                                        <TableCell>{row.estado}</TableCell>
                                    </>}
                                    {categoria === "facturas" && <>
                                        <TableCell>{row.numero}</TableCell>
                                        <TableCell>{row.fecha}</TableCell>
                                        <TableCell>${row.total}</TableCell>
                                    </>}
                                    {categoria === "huespedes" && <>
                                        <TableCell>{row.nombre}</TableCell>
                                        <TableCell>{row.reservas}</TableCell>
                                    </>}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>

                {/* Resumen */}
                {resumen && (
                    <Typography variant="subtitle1">
                        {categoria === "ingresos" && `Total de ingresos: $${resumen.total.toLocaleString()}`}
                        {categoria === "reservas" && `Reservas completadas: ${resumen.total}`}
                        {categoria === "facturas" && `Total facturado: $${resumen.total}`}
                        {categoria === "huespedes" && `Total de reservas entre huéspedes frecuentes: ${resumen.total}`}
                    </Typography>
                )}
            </Box>
        </>
    );
}
