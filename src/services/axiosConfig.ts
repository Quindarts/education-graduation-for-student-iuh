import { onPreprocessHttpMethod } from '@/utils/axiosFunction';
import { env } from '@/utils/env';
import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: `${env.API_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
});

onPreprocessHttpMethod(axiosConfig);

export default axiosConfig;
