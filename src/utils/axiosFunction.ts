import { getValueFromLocalStorage } from '@/utils/localStorage';
import {  AxiosInstance } from 'axios';
import { redirect } from 'react-router-dom';

export const onPreprocessHttpMethod = (appAxios: AxiosInstance) => {
    appAxios.interceptors.request.use(
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

    appAxios.interceptors.response.use(
        (response: any) => {
            return response.data;
        },
        async (error) => {
            const originalRequest = error.config;

            if (error.response.data.status === 401 && error.response.data.success === false) {
                originalRequest._retry = true;

                try {
                    const refreshToken = getValueFromLocalStorage("refreshTokenStudent");
                    const result: any = await appAxios.post('/students/refresh-token', {
                        refreshToken,
                    });
                    localStorage.setItem('accessTokenStudent', JSON.stringify(result.accessToken));
                    originalRequest.headers.Authorization = `Bearer ${result.accessToken}`;

                    return appAxios(originalRequest);
                } catch (error: any) {
                    if (error.message === 'jwt expired' && error.status >= 500 && error.success === false) {
                        localStorage.clear();
                        redirect("/auth/login")
                    }
                    return Promise.reject(error);
                }
            }
            return Promise.reject(error.response.data);

        },
    );
}