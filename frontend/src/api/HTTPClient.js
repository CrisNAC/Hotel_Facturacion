//import axios from "axios";
import axiosInstance from "./axiosInstance.js";

class HTTPClient {
    constructor() {
        let baseURL;

        if (import.meta.env.MODE === 'development') {
            baseURL = import.meta.env.VITE_LOCAL_HOST;
        } else if (import.meta.env.VITE_BACKEND_ENV === 'dev') {
            baseURL = import.meta.env.VITE_DEV;
        } else {
            baseURL = import.meta.env.VITE_PRODUCCION;
        }

        /*this.instance = axios.create({
            baseURL,
            withCredentials: true
        });*/
		this.instance = axiosInstance;
		this.instance.defaults.baseURL = baseURL;
		this.instance.defaults.withCredentials = true;
    }

    /****           SESSION - LOGIN         ****/
    login(data) {
        return this.instance.post('/session', data)
    };

    cerrarSesion() {
        return this.instance.delete('/session');
    };

    getUser() {
        return this.instance.get('/session/user-session');
    }

    /****    INICIO    ****/
    getDashboard() {
        return this.instance.get('/dashboard');
    }

    /****       LISTADO DE INGRESOS        ****/
    getIngresos() {
        return this.instance.get("/ingresos");
    };

    getIngresoById(id) {
        return this.instance.get(`/ingresos/${id}`);
    };

    postIngreso(data) {
        return this.instance.post("/ingresos", data);
    }

    cancelarIngreso(id) {
        return this.instance.patch(`/ingresos/${id}`);
    }

    /****        HUESPEDES        ****/
    getHuespedes() {
        return this.instance.get("/huesped");
    }

    getHuespedesFrecuentes(fechaDesde, fechaHasta) {
        return this.instance.get(`huesped/frecuentes/${fechaDesde}/${fechaHasta}`);
    }

    getAHuespedById(id) {
        return this.instance.get(`/huesped/${id}`);
    }

    postHuesped(datos) {
        return this.instance.post(`/huesped`, datos);
    };

    deleteAHuespedById(id) {
        return this.instance.delete(`/huesped/${id}`);
    }

    updateHuesped(id, datos) {
        return this.instance.put(`/huesped/${id}`, datos);
    };

    getHuespedPorDocumento(data){
        return this.instance.get(`/huesped/buscar/${data}`);
    };

    /****        HUESPEDES HABITACION       ****/
    getDetalleHabitacion(id) {
        return this.instance.get(`/huespedHabitacion/${id}`);
    };

    /****        FACTURAS       ****/
    getFacturas() {
        return this.instance.get("/facturas");
    }

    getFacturasPorFechas(fechaDesde, fechaHasta) {
        return this.instance.get(`/facturas/fechas/${fechaDesde}/${fechaHasta}`);
    }

    getFacturaById(id) {
        return this.instance.get(`/facturas/${id}`);
    }

    getUltimaFactura() {
        return this.instance.get("/facturas/ultimafactura");
    }
    crearFactura(data) {
        return this.instance.post('/facturas', data);
    }

    enviarFactura(data) {
        return this.instance.post('/facturas/enviar', data);
    }

    /****        RESERVAS       ****/
    getReservasPorFechas(fechaDesde, fechaHasta) {
        return this.instance.get(`/reserva/fechas/${fechaDesde}/${fechaHasta}`);
    };

    getAReservaById(id) {
        return this.instance.get(`/reserva/${id}`);
    };

    /****    CONSUMO   ****/
    postConsumo(data) {
        return this.instance.post('/consumo', data);
    };

    updateConsumo(id, data) {
        return this.instance.patch(`/consumo/${id}`, data);
    };

    deleteConsumo(id, data) {
        return this.instance.put(`/consumo/${id}`, data);
    };

    /****    PRODUCTOS     ****/
    getProductos() {
        return this.instance.get('/productos');
    }

	/****	HABITACIONES ****/
	getHabitaciones() {
		return this.instance.get('/habitacion');
	}

	/****	TARIFAS ****/
	getTarifas() {
		return this.instance.get('/tarifa');
	}

	getTarifaById(id) {
		return this.instance.get(`/tarifa/${id}`);
	}

    /****    ASIENTOS CONTABLES     ****/
    getAsientos() {
        return this.instance.get('/asientos');
    }
};

export default HTTPClient;