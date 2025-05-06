import axios from "axios";

class HTTPClient {
    constructor() {
        this.instance = axios.create({
            baseURL: "http://localhost:4000/api"
        })
    };

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
};

export default HTTPClient;