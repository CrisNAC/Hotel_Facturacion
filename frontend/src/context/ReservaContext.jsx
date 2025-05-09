import { createContext, useContext, useState } from "react";

const ReservaContext = createContext();

export const ReservaProvider = ({children}) => {
	const [reservaSeleccionada, setReservaSeleccionada] = useState(null);

	return (
		<ReservaContext.Provider value={{ reservaSeleccionada, setReservaSeleccionada }}>
			{ children }
		</ReservaContext.Provider>
	);
};

export const useReserva = () => {
	return useContext(ReservaContext);
}
