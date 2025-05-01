import axios from "axios";

class HTTPClient {
    constructor(){
        this.instance = axios.create({
            baseURL: "http://localhost:4000/api"
        })
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
    }

    getHuespedById(huespedId){
        return this.instance.get(`/ingresos/${huespedId}`)
    }

    /****        HUESPEDES        ****/ 

    /*getHuespedes() {
        return this.instance.get("/huespedes");
    }*/
}

export default HTTPClient;