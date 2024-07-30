import ResponseType from "@/types/axios.type";
import axiosConfig from "./axiosConfig";

export enum ENUM_EVALUATION {
    'ADVISOR', 'REVIEWER', 'REPORT'
}

class EvaluationService {
    static ID: number;
    endpoint: string;
    constructor(endpoint?: string) {
        this.endpoint = endpoint ? endpoint : '/evaluations';
    }
    async getAllReviewByType(termId?: string, review?: string) {
        return axiosConfig.get<ResponseType, any>(`${this.endpoint}?termId=${termId}&type=${review}`)
    }
}

export default EvaluationService;