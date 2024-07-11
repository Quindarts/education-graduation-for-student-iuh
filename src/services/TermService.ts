import axiosConfig from "./axiosConfig";
import ResponseType from "@/types/axios.type";

class TermService {
    static ID: number;

    endpoint: string;
    constructor(endpoint?: string) {
        this.endpoint = endpoint ? endpoint : '/terms';
    }
    async getTermNow(): Promise<Pick<ResponseType, 'success' | 'term' | 'message'>> {
        return await axiosConfig.get(`${this.endpoint}/now`);
    }
}

export default TermService;