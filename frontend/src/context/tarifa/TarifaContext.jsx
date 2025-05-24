import { createContext, useContext, useState } from "react";

const TarifaContext = createContext();

export const TarifaProvider = ({ children }) => {
	const [tarifaSeleccionada, setTarifaSeleccionada] = useState(null);

	const value = {
        tarifaSeleccionada,
        setTarifaSeleccionada,
    };

	return (
		<TarifaContext.Provider value={value}>
			{children}
		</TarifaContext.Provider>
	);
};

export const useTarifa = () => {
	return useContext(TarifaContext);
}
