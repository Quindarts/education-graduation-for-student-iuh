import ResponseType from "@/types/axios.type";
import axiosConfig from "./axiosConfig";
class FinalReportService {
    static ID: number;
    endpoint: string;
    constructor(endpoint?: string) {
        this.endpoint = endpoint ? endpoint : '/final-reports/group-student';
    }
    async getReportByGroupStudentId(termId: string): Promise<ResponseType> {
        return await axiosConfig.get(`${this.endpoint}?termId=${termId}`);
    }
}
export default FinalReportService;