
import {Outlet} from "react-router-dom";
import { TarifaProvider } from "./TarifaContext.jsx";

const TarifaLayout = () => {
    return (
        <TarifaProvider>
            <Outlet />
        </TarifaProvider>
    );
};

export default TarifaLayout;
