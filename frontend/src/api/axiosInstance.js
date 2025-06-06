import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
	response => response,
	error => {
		if (error.response?.status === 401) {
			window.dispatchEvent(new CustomEvent('unauthorized'));
		}
		return Promise.reject(error);
	}
);

export default axiosInstance;