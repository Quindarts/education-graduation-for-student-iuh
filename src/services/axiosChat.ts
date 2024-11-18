import { onPreprocessHttpMethod } from '@/utils/axiosFunction';
import { env } from '@/utils/env';
import axios from 'axios';

const axiosChat = axios.create({
    baseURL: `${env.API_URL}/api/v1`,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 20000,
});

onPreprocessHttpMethod(axiosChat);

export default axiosChat;