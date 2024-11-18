import { queryClient } from "@/providers/ReactQuery";
import EventService from "@/services/EventService";
import useGroupStudentStore from "@/store/groupStudentStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import { QueryKeysGroupStudent } from "./useGroupStudent";
import { useEffect } from "react";

export enum QueryKeysEvent {
    EVENT = 'getEventByGroupStudentId',
}
const useEvent = () => {
    const eventSevice = new EventService();
    const groupId = useGroupStudentStore(state => state.groupId);

    const { enqueueSnackbar } = useSnackbar();
    const HandleGetEvents = () => {
        const { data, isLoading, isSuccess, isFetching, ...rest } = useQuery({
            queryKey: [QueryKeysEvent.EVENT],
            queryFn: () => eventSevice.getEventByGroupStudentId(groupId),
            staleTime: 1000 * (60 * 4),
            select(data) {
                return data.events
            },
            enabled: !!groupId,
        })
        return {
            events: data,
            isLoading,
            isFetching,
            isSuccess,
            ...rest,
        }
    }
    const OnSubmitEvent = (id: string) => {
        return useMutation({
            mutationFn: (link: string) => eventSevice.submitEvent({ id: id, link: link, groupStudentId: groupId }),
            onSuccess: (data: any) => {
                if (data.success === true) {
                    enqueueSnackbar('Nộp bài thành công', { variant: "success" })
                    queryClient.resetQueries({ queryKey: [QueryKeysEvent.EVENT] })
                }
            },
            onError: (error: any) => {
                if (error.status < 500) {
                    enqueueSnackbar(error.message, { variant: "error" })
                } else {
                    enqueueSnackbar("Thao tác thất bại vui lòng refresh lại trang", { variant: "warning" })
                }
            },
        })
    }
    return {
        OnSubmitEvent,
        HandleGetEvents,
    }
}
export default useEvent;