import { createContext, useContext, useState } from "react";

const HabitacionContext = createContext();

export const HabitacionProvider = ({ children }) => {
	const [habitacionSeleccionada, setHabitacionSeleccionada] = useState(null);

	const value = {
        habitacionSeleccionada,
        setHabitacionSeleccionada,
    };

	return (
		<HabitacionContext.Provider value={value}>
			{children}
		</HabitacionContext.Provider>
	);
};

export const useHabitacion = () => {
	return useContext(HabitacionContext);
}
