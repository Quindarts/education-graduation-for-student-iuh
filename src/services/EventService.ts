
import ResponseType from "@/types/axios.type";
import axiosConfig from "./axiosConfig";
class EventService {
    static ID: number;
    endpoint: string;
    constructor(endpoint?: string) {
        this.endpoint = endpoint ? endpoint : '/events';
    }
    async getEventByGroupStudentId(groupStudentId: string): Promise<ResponseType> {
        return await axiosConfig.get(`${this.endpoint}/group-student/${groupStudentId}`);
    }

    async submitEvent(data: { id: string, link: string, groupStudentId: string }) {
        return await axiosConfig.put(
            `${this.endpoint}/${data.id}/submit`,
            data,
        );
    }
}
export default EventService;    