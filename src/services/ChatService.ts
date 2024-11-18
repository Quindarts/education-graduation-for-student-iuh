import axiosConfig from "./axiosConfig";

class EvaluationService {
    static ID: number;
    endpoint: string;
    constructor(endpoint?: string) {
        this.endpoint = endpoint ? endpoint : '/suggest';
    }
    async sendMessage(termId?: string, review?: string) {
        return axiosConfig.post<ResponseType, any>(`${this.endpoint}?termId=${termId}&type=${review}`)
    }
}