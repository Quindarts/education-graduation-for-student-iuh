import { env } from '@/utils/env';
import { getValueFromLocalStorage } from '@/utils/localStorage';
import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: `${env.BASE_URL}/api/v1`,
  // baseURL: 'http://localhost:3000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});


axiosConfig.interceptors.request.use(
  (config) => {
    const accessToken = getValueFromLocalStorage("accessTokenStudent");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosConfig.interceptors.response.use(
  (response: any) => {
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.data.status === 401 && error.response.data.success === false) {
      originalRequest._retry = true;

      try {
        const refreshToken = getValueFromLocalStorage("refreshTokenStudent");
        const result: any = await axiosConfig.post('/students/refresh-token', {
          refreshToken,
        });
        localStorage.setItem('accessTokenStudent', JSON.stringify(result.accessToken));
        originalRequest.headers.Authorization = `Bearer ${result.accessToken}`;

        return axiosConfig(originalRequest);

      } catch (error: any) {

        if (error.message === 'jwt expired' && error.status === 500 && error.success === false) {
          localStorage.clear();
        }
        return Promise.reject(error);
      }
    }

    return Promise.reject(error.response.data);

  },
);
export default axiosConfig;
