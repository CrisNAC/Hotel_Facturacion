/* eslint-disable no-unused-vars */
import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    //base: '/Hotel_Facturacion/',
    plugins: [react()],
	server: {
		port: 5173,
		proxy: {	//CONFIGURAR LOS PREFIJOS DE LAS PETICIONES
			'/api': {
				target: 'http://localhost:4000',
			},
		},
	},
});
