import axios from 'axios';
import { VITE_BASE_API_URL } from '../env';

export const axiosInstance = axios.create({ baseURL: VITE_BASE_API_URL });
