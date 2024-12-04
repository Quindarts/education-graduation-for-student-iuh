import ResponseType from "@/types/axios.type";
import axiosConfig from "./axiosConfig";
class ArticleService {
    static ID: number;
    endpoint: string;
    constructor(endpoint?: string) {
        this.endpoint = endpoint ? endpoint : '/articles';
    }
    async getArticleByStudentId(termId: string): Promise<ResponseType> {
        return await axiosConfig.get(`${this.endpoint}/student?termId=${termId}`);
    }
    async submitArticle(data: { name: string; type: string; author: string; authorNumber: number; publicDate: string; link: string }) {
        return await axiosConfig({
            url: `${this.endpoint}`,
            method: 'post',
            data,
        });
    }
}
export default ArticleService;