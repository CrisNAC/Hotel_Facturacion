import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function AppWrapper({children}) {
    const navigate = useNavigate();

    useEffect(() => {
        const handleUnauthorized = () => {
            navigate("/ErrorPage", {
                state: {
                    code: 401,
                    message: "Sesión expirada. Por favor, vuelva a iniciar sesión.",
                    redirectToLogin: "/",
                },
                replace: true,
            });
        };

        window.addEventListener("unauthorized", handleUnauthorized);

        return () => {
            window.removeEventListener("unauthorized", handleUnauthorized);
        };
    }, [navigate]);

    return children;
}

export default AppWrapper;
