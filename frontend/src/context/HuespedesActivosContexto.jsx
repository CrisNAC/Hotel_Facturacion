import React, { createContext, useState } from 'react';

// 1️⃣ Creamos el contexto
export const HuespedesActivosContext = createContext();

// 2️⃣ Creamos el Provider que envolverá nuestra app o página
export const HuespedesActivosProvider = ({ children }) => {
    // Estados para controlar la navegación
    const [mainPage, setMainPage] = useState(true);
    const [vistaFactura, setVistaFactura] = useState(false);
    const [facturaTemporal, setFacturaTemporal] = useState(null); 
    
    // Estado para el huésped seleccionado
    const [huespedSeleccionado, setHuespedSeleccionado] = useState(null);
    
    // Estado para los datos de facturación
    const [datosFacturacion, setDatosFacturacion] = useState({
        condicionVenta: 'contado',
        ruc: '',
        razonSocial: ''
    });

    // Función para actualizar datos de facturación
    const actualizarDatosFacturacion = (nuevosDatos) => {
        setDatosFacturacion(prev => ({ ...prev, ...nuevosDatos }));
    };

    // Valor que exponemos a los componentes hijos
    const value = {
        mainPage,
        setMainPage,
        vistaFactura,
        setVistaFactura,
        huespedSeleccionado,
        setHuespedSeleccionado,
        datosFacturacion,
        actualizarDatosFacturacion,
        facturaTemporal,
        setFacturaTemporal
    };


    return (
        <HuespedesActivosContext.Provider value={value}>
            {children}
        </HuespedesActivosContext.Provider>
    );
};
