import TranscriptService from "@/services/TranscriptService";
import useTermStore from "@/store/termStore";
import { useQuery } from "@tanstack/react-query";

enum QueryKeysTranscript {
    getTranscriptSummary = "getTranscriptSummary",
    getTranscriptByPart = 'getTranscriptByPart'
}
function useTranscript() {
    const transcriptService = new TranscriptService()
    const term = useTermStore(s => s.term);
    const HandleGetTranscriptSummary = () => {
        const { data, isLoading, isSuccess, ...rest } = useQuery({
            queryKey: [QueryKeysTranscript.getTranscriptSummary, term.id],
            queryFn: () => transcriptService.getTranscripts(term.id),
            select(data) {
                return data.transcript
            },
        });
        return {
            transcript: data,
            isLoading,
            isSuccess,
            ...rest,
        }
    }
    const HandleGetTranscriptByPart = (type: string) => {
        const { data, isLoading, isSuccess, ...rest } = useQuery({
            queryKey: [QueryKeysTranscript.getTranscriptByPart, term.id, type],
            queryFn: () => transcriptService.getTranscriptByStudent(term.id, type),
            select(data) {
                return data.transcript
            },
        });
        return {
            transcript: data,
            isLoading,
            isSuccess,
            ...rest,
        }
    }
    return {
        HandleGetTranscriptSummary,
        HandleGetTranscriptByPart
    }
}
export default useTranscript;