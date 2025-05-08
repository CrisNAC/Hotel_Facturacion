import React, { createContext, useState } from 'react';

// 1️⃣ Creamos el contexto
export const HuespedesActivosContext = createContext();

// 2️⃣ Creamos el Provider que envolverá nuestra app o página
export const HuespedesActivosProvider = ({ children }) => {
    const [mainPage, setMainPage] = useState(true);
    const [vistaFactura, setVistaFactura] = useState(false);

    return (
        <HuespedesActivosContext.Provider value={{ mainPage, vistaFactura, setMainPage, setVistaFactura }}>
            {children}
        </HuespedesActivosContext.Provider>
    );
};
