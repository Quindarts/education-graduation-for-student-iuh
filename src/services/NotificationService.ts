import { AxiosResponse } from "axios";
import axiosConfig from "./axiosConfig";

class NotificationService {

    endpoint: string;
    constructor(endpoint?: string) {
        this.endpoint = endpoint ? endpoint : '/notification-students';
    }
    getMajorById(id: string) {
        return axiosConfig<AxiosResponse>(`${this.endpoint}/${id}`);
    }
    async getAllNotify() {
        return await axiosConfig<AxiosResponse>({
            url: `${this.endpoint}`,
            method: 'get',
        });
    }

    async readNotify(id: string) {
        return await axiosConfig<AxiosResponse>({
            url: `${this.endpoint}/${id}/read`,
            method: 'put',
        });
    }

    async deleteNotify(id: string) {
        return await axiosConfig<AxiosResponse>({
            url: `${this.endpoint}/${id}`,
            method: 'delete',
        });
    }
}

export default NotificationService;