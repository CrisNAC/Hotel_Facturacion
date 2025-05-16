import { createContext, useContext, useState } from "react";

const ReservaContext = createContext();

export const ReservaProvider = ({ children }) => {
	const [reservaSeleccionada, setReservaSeleccionada] = useState(null);

	const value = {
		reservaSeleccionada, setReservaSeleccionada
	};

	return (
		<ReservaContext.Provider value={value}>
			{children}
		</ReservaContext.Provider>
	);
};

export const useReserva = () => {
	return useContext(ReservaContext);
}
