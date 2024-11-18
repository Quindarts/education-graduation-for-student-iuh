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

    async getTopicsOfSearch(termId: string, searchField: string, keywords: string, sort: string, limit: string, page: string) {
        const searchFieldSend = searchField ? searchField : "name";
        const keywordSend = keywords ? keywords : ""
        const sortSend = sort ? sort : "ASC"
        return await axiosConfig.get<AxiosResponse, any>(`/topics?termId=${termId}&keywords=${keywordSend}&searchField=${searchFieldSend}&limit=${limit}&page=${page}&sort=${sortSend}`)
    }
    async getKeywords(termId: string) {
        return await axiosConfig.get<AxiosResponse, any>(`/topics/keywords?termId=${termId}`)
    }
    async getTopicList(termId: string, majorId: string): Promise<Pick<ResponseType, 'success' | 'message' | 'topics'>> {
        return await axiosConfig.get(`${this.endpoint}?termId=${termId}&majorId=${majorId}`);
    }
    async chooseTopic(groupStudentId: string, topicId: string) {
        return await axiosConfig.put(`${this.endpoint}/${groupStudentId}/cancel-topic`, topicId)
    }

}
export default TopicService;