import { AxiosResponse } from "axios";
import axiosConfig from "./axiosConfig";
import ResponseType from "@/types/axios.type";

class TopicService {

    endpoint: string;

    constructor(endpoint?: string) {
        this.endpoint = endpoint ? endpoint : '/topics';
    }
    async getTopicId(id: string) {
        return await axiosConfig.get<AxiosResponse, any>(`${this.endpoint}/${id}`);
    }
    async getTopicsOfSearch(termId: string, keywords: string, limit: string, page: string) {
        const searchField = "name"
        const keywordSender = keywords ? keywords : ''
        return await axiosConfig.get<AxiosResponse, any>(`${this.endpoint}/query?termId=${termId}&keywords=${keywordSender}&searchField=${searchField}&page=${page}&limit=${limit}`)
    }

    async getTopicList(termId: string, majorId: string): Promise<Pick<ResponseType, 'success' | 'message' | 'topics'>> {
        return await axiosConfig.get(`${this.endpoint}?termId=${termId}&majorId=${majorId}`);
    }
    async chooseTopic(groupStudentId: string, topicId: string) {
        return await axiosConfig.put(`${this.endpoint}/${groupStudentId}/cancel-topic`, topicId)
    }

}
export default TopicService;