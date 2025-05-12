import axios from "axios";

class HTTPClient {
    constructor() {
        this.instance = axios.create({
            baseURL: "http://localhost:4000/api"
        })
        /*
        let baseURL;

        if (import.meta.env.MODE === 'development') {
            baseURL = import.meta.env.VITE_LOCAL_HOST;
        } else if (import.meta.env.VITE_BACKEND_ENV === 'dev') {
            baseURL = import.meta.env.VITE_DEV;
        } else {
            baseURL = import.meta.env.VITE_PRODUCCION;
        }

        this.instance = axios.create({
            baseURL
        });*/
    }

    /****               LOGIN                ***/
    /* login(email, password){
        return this.instance.post("/login", {
            email,
            password
        })
    }*/

    /****       LISTADO DE INGRESOS        ****/

    getIngresos() {
        return this.instance.get("/ingresos");
    };

    cancelarIngreso(id) {
        return this.instance.patch(`/ingresos/${id}`);
    }

    /****        HUESPEDES        ****/
    /*getHuespedes() {
        return this.instance.get("/huespedes");
        }*/

    getHuespedById(huespedId) {
        return this.instance.get(`/ingresos/${huespedId}`)
    };

    /****        HUESPEDES HABITACION       ****/
    getDetalleHabitacion(id) {
        return this.instance.get(`/huespedHabitacion/${id}`);
    };

    /****        FACTURAS       ****/
    getFacturas() {
        return this.instance.get("/facturas");
    }

    getFacturaById(id) {
        return this.instance.get(`/facturas/${id}`);
    }

};

export default HTTPClient;