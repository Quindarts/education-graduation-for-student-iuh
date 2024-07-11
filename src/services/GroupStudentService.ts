import { AxiosResponse } from "axios";
import axiosConfig from "./axiosConfig";

class GroupStudentService {
    endpoint: string;

    constructor(endpoint?: string) {
        this.endpoint = endpoint ? endpoint : '/group-students';
    }
    async getMyGroup(termId: string) {
        return await axiosConfig.get<AxiosResponse>(
            `${this.endpoint}/me?termId=${termId}`
        );
    }
    async getListGroup(termId: string) {
        return await axiosConfig.get<AxiosResponse>(
            `${this.endpoint}/term?termId=${termId}`,
        );
    }

    async assignAdmin(groupId: string, studentId: string) {
        return await axiosConfig.put<AxiosResponse>(
            `${this.endpoint}/${groupId}/assign-admin`,
            { studentId },
        );
    }
    async removeMember(groupId: string, studentId: string) {
        return await axiosConfig.put<AxiosResponse>(
            `${this.endpoint}/${groupId}/remove-member`,
            { studentId }
        );
    }
    async leaveGroup(groupId: string) {
        return await axiosConfig.put<AxiosResponse>(`${this.endpoint}/${groupId}/leave-group`);
    }
    async joinGroup(groupId: string) {
        return await axiosConfig.put<AxiosResponse>(`${this.endpoint}/${groupId}/join-group`,);
    }

    async chooseTopic(groupId: string, topicId: string) {
        return await axiosConfig.put<AxiosResponse>(
            `${this.endpoint}/${groupId}/choose-topic`,
            { topicId },
        );
    }

    async cancelTopic(groupId: string) {
        return await axiosConfig.put<AxiosResponse>(
            `${this.endpoint}/${groupId}/cancel-topic`,
        );
    }
}
export default GroupStudentService;  