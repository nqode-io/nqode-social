import axios from 'axios';

axios.defaults.baseURL = import.meta.env.BACKEND_BASE_URL;
axios.defaults.withCredentials = true;
