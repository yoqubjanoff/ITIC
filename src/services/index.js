import axios from 'axios';

const request = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	
	headers: {
		common: {
			Authorization:
				window.location.pathname?.search('admin') > 0
					? localStorage.getItem('tokenAdmin')
						? 'Basic ' + localStorage.getItem('tokenAdmin')
						: null
					: localStorage.getItem('token')
					? 'Basic ' + localStorage.getItem('token')
					: null,
		},
	},
	timeout: 30000,
});

request.interceptors.request.use(
	(config) => {
		const token =
			window.location.pathname?.search('admin') > 0
				? localStorage.getItem('tokenAdmin')
					? 'Basic ' + localStorage.getItem('tokenAdmin')
					: null
				: localStorage.getItem('token')
				? 'Basic ' + localStorage.getItem('token')
				: null;
		config.headers['Authorization'] = `${token}`;

		return config;
	},
	(error) => {
		if (error.response?.status === 401) {
			localStorage.clear();
			window.location.pathname = '/register';
		}

		return Promise.reject(error);
	},
);

request.interceptors.response.use(
	(response) => {
		return response;
	},
	(err) => {
		if (err?.response?.status === 401 || err?.response?.status === 403) {
			if (
				window.location.pathname !== '/signin' &&
				window.location.pathname !== '/' &&
				window.location.pathname !== '/register' &&
				window.location.pathname?.search('admin/sign-in') < 0 &&
				window.location.pathname?.search('reset') < 0 &&
				window.location.pathname?.search('verify') < 0
			) {
				if(window.location.pathname?.search('admin') > 0){
					(window.location.pathname = '/admin/sign-in')
				}
			} else {
				return Promise.reject(err);
			}
		} else {
			return Promise.reject(err);
		}

	},
);


export default request;
