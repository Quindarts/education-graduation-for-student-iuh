import ResponseType from "@/types/axios.type";
import axiosConfig from "./axiosConfig";

export class SuggestService {
    endpoint: string;
    constructor(endpoint?: string) {
        this.endpoint = endpoint ? endpoint : '/suggest';
    }
    async suggestTopic(termId: string, message: string): Promise<ResponseType> {
        return axiosConfig.post(`${this.endpoint}`, { termId, message });
    }
}