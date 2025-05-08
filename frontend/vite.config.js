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
				changeOrigin: true,
				secure: false,
				selfHandleResponse: false,
				configure: (proxy, _options) => {
					proxy.on('proxyRes', (proxyRes, req, res) => {
						if (proxyRes.statusCode === 401) {
							console.log('Redirigiendo...');
							res.writeHead(401, {
								'Location': '/Login'
							});
							res.end();
							return;
						}
						//continue normally
						proxyRes.pipe(res);
					});
				}
			},
		},
	},
});
