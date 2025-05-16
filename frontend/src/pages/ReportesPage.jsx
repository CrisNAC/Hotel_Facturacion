// src/pages/ReportesPage.jsx
import { useState } from 'react';
import {
    Box, Typography, Grid, FormControl, InputLabel, Select,
    MenuItem, TextField, Button, Table, TableHead, TableRow,
    TableCell, TableBody, Paper
} from '@mui/material';
import dayjs from 'dayjs';

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

    const [datos, setDatos] = useState([]); // Aquí irán los registros de la tabla
    const [resumen, setResumen] = useState(null); // Datos del resumen

    const handleBuscar = () => {
        // Simulación de datos (reemplazar con fetch real)
        const mock = {
            ingresos: [
                { id: 1, fecha: '2025-05-10', concepto: 'Pago de reserva', monto: 100 },
                { id: 2, fecha: '2025-05-12', concepto: 'Pago adicional', monto: 50 },
            ],
            reservas: [
                { id: 3, fecha: '2025-05-05', huesped: 'Juan Pérez', estado: 'Completada' },
            ],
            facturas: [
                { id: 4, numero: 'F001', fecha: '2025-05-08', total: 150 },
            ],
            huespedes: [
                { id: 5, nombre: 'Ana Gómez', reservas: 3 },
                { id: 6, nombre: 'Carlos Ruiz', reservas: 2 },
            ]
        };

        const resumenes = {
            ingresos: { total: 150 },
            reservas: { total: 1 },
            facturas: { total: 150 },
            huespedes: { total: 5 },
        };

        setDatos(mock[categoria]);
        setResumen(resumenes[categoria]);
    };

    const handleExportar = () => {
        alert("Exportar a PDF o Excel (implementación futura)");
    };

    return (
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
                                <TableCell>Fecha</TableCell>
                                <TableCell>Concepto</TableCell>
                                <TableCell>Monto</TableCell>
                            </>}
                            {categoria === "reservas" && <>
                                <TableCell>Fecha</TableCell>
                                <TableCell>Huésped</TableCell>
                                <TableCell>Estado</TableCell>
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
                                    <TableCell>{row.fecha}</TableCell>
                                    <TableCell>{row.concepto}</TableCell>
                                    <TableCell>${row.monto}</TableCell>
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
                    {categoria === "ingresos" && `Total de ingresos: $${resumen.total}`}
                    {categoria === "reservas" && `Reservas completadas: ${resumen.total}`}
                    {categoria === "facturas" && `Total facturado: $${resumen.total}`}
                    {categoria === "huespedes" && `Total de reservas entre huéspedes frecuentes: ${resumen.total}`}
                </Typography>
            )}
        </Box>
    );
}
