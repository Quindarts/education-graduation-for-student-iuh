import { AxiosResponse } from "axios";
import axiosConfig from "./axiosConfig";

class GroupStudentService {
    endpoint: string;

    constructor(endpoint?: string) {
        this.endpoint = endpoint ? endpoint : '/group-students';
    }
    async getMyGroup(termId: string) {
        return await axiosConfig.get<AxiosResponse, any>(
            `${this.endpoint}/me?termId=${termId}`
        );
    }
    async submitReviewDocument(groupId: string, link: string) {
        return await axiosConfig.put<AxiosResponse, any>(
            `${this.endpoint}/${groupId}/submit`,
            { link: link }
        );
    }
    async getListGroup(termId: string) {
        return await axiosConfig.get<AxiosResponse, any>(
            `${this.endpoint}/term?termId=${termId}`,
        );
    }
    async getGroupMembers(groupId: string) {
        return await axiosConfig.get<AxiosResponse, any>(
            `${this.endpoint}/${groupId}/members`,
        )
    }

    async assignAdmin(groupId: string, studentId: string) {
        return await axiosConfig.put<AxiosResponse, any>(
            `${this.endpoint}/${groupId}/assign-admin`,
            { studentId },
        );
    }
    async removeMember(groupId: string, studentId: string) {
        return await axiosConfig.put<AxiosResponse, any>(
            `${this.endpoint}/${groupId}/remove-member`,
            { studentId }
        );
    }
    async leaveGroup(groupId: string) {
        return await axiosConfig.put<AxiosResponse, any>(`${this.endpoint}/${groupId}/leave-group`);
    }
    async joinGroup(groupId: string) {
        return await axiosConfig.put<AxiosResponse, any>(`${this.endpoint}/${groupId}/join-group`,);
    }

    async chooseTopic(groupId: string, topicId: string) {
        return await axiosConfig.put<AxiosResponse, any>(
            `${this.endpoint}/${groupId}/choose-topic`,
            { topicId },
        );
    }

    async cancelTopic(groupId: string) {
        return await axiosConfig.put<AxiosResponse, any>(
            `${this.endpoint}/${groupId}/cancel-topic`,
        );
    }
}
export default GroupStudentService;  