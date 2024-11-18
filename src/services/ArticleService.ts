import ResponseType from "@/types/axios.type";
import axiosConfig from "./axiosConfig";
class ArticleService {
    static ID: number;
    endpoint: string;
    constructor(endpoint?: string) {
        this.endpoint = endpoint ? endpoint : '/articles';
    }
    async getArticleByGroupStudentId(groupStudentId: string): Promise<ResponseType> {
        return await axiosConfig.get(`${this.endpoint}/group-student/${groupStudentId}`);
    }
    async submitArticle(data: { name: string; type: string; author: string; authorNumber: number; publicDate: string; link: string; groupStudentId: string }) {
        return await axiosConfig({
            url: `${this.endpoint}`,
            method: 'post',
            data,
        });
    }
}
export default ArticleService;