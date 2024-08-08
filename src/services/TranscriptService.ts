import { AxiosResponse } from "axios";
import axiosConfig from "./axiosConfig";

class TranscriptService {

    endpoint: string;
    constructor(endpoint?: string) {
        this.endpoint = endpoint ? endpoint : '/transcripts';
    }
    getTranscripts(termId: string) {
        return axiosConfig.get<AxiosResponse>(`${this.endpoint}/summary?termId=${termId}`);
    }

    getTranscriptByStudent(termId: string, type: string) {
        return axiosConfig.get<AxiosResponse>(`${this.endpoint}/student?termId=${termId}&type=${type}`);
    }
}

export default TranscriptService;