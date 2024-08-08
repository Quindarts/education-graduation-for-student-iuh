import { IAuth, IUser } from "@/types/auth.type";
import axiosConfig from "./axiosConfig";
import { AxiosResponse } from "axios";
import ResponseType from "@/types/axios.type";

class AuthService {
    static ID: number;
    endpoint: string;

    constructor(endpoint?: string) {
        this.endpoint = endpoint ? endpoint : '/students';
    }
    login = async (data: IAuth) => {
        return await axiosConfig.post<Promise<IUser>>(`${this.endpoint}/login`, data)
    }
    async getMe(): Promise<Pick<ResponseType, 'success' | 'user' | 'message'>> {
        return await axiosConfig.get(`${this.endpoint}/me`);
    }

    async updateMe(data: IUser) {
        return await axiosConfig<AxiosResponse>({
            url: `${this.endpoint}/me`,
            method: 'put',
            data,
        });
    }

    async updatePassword(data: { password: string; newPassword: string }) {
        return await axiosConfig<AxiosResponse>({
            url: `${this.endpoint}/update-password`,
            method: 'put',
            data,
        });
    }

    async logout() {
        return await axiosConfig<AxiosResponse>({
            url: `${this.endpoint}/logout`,
            method: 'delete',
        });
    }
    async forgotPassword(username: string) {
        return await axiosConfig({
            url: `${this.endpoint}/forgot-password`,
            method: 'post',
            data: { username: username }
        })
    }
}
export default AuthService;    