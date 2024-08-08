import { AxiosResponse } from "axios";
import axiosConfig from "./axiosConfig";

class MajorService {

    endpoint: string;
    constructor(endpoint?: string) {
        this.endpoint = endpoint ? endpoint : '/majors';
    }
    getMajorById(id: string) {
        return axiosConfig<AxiosResponse>(`${this.endpoint}/${id}`);
    }
}

export default MajorService;