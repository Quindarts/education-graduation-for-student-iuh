import axiosConfig from "./axiosConfig";
import ResponseType from "@/types/axios.type";

class TermService {
    static ID: number;

    endpoint: string;
    constructor(endpoint?: string) {
        this.endpoint = endpoint ? endpoint : '/terms';
    }
    async getTermNow(majorId: string): Promise<Pick<ResponseType, 'success' | 'term' | 'message'>> {
        return await axiosConfig.get(`${this.endpoint}/now?majorId=${majorId}`);
    }
}

export default TermService;