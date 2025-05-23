
import {Outlet} from "react-router-dom";
import { HabitacionProvider } from "./HabitacionContext";

const HabitacionLayout = () => {
    return (
        <HabitacionProvider>
            <Outlet />
        </HabitacionProvider>
    );
};

export default HabitacionLayout;
