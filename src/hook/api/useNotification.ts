import { queryClient } from "@/providers/ReactQuery";
import NotificationService from "@/services/NotificationService"
import useUserStore from "@/store/userStore";
import { useMutation, useQuery } from "@tanstack/react-query"
import { useSnackbar } from "notistack";

enum QueryKeysNotification {
    getMyNotification = "getMyNotification",
    getNotificationById = "getNotificationById"
}

function useNotification() {
    const notificationService = new NotificationService();
    const me = useUserStore(state => state.me)
    const { enqueueSnackbar } = useSnackbar()

    const HandleDetailNotification = (id: string) => {
        return useQuery({
            queryKey: [QueryKeysNotification.getNotificationById, id],
            queryFn: () => notificationService.getNotificationById(id),
            select(data: any) {
                return data.notification;
            },
        });
    }


    const HandleGetMyNotification = () => {
        return useQuery({
            queryKey: [QueryKeysNotification.getMyNotification],
            queryFn: () => notificationService.getMyNotification(),
            staleTime: 5000,
            select(data: any) {
                return data.notificationStudents;
            },  
        });
    }

    const OnReadNotification = () => {
        return useMutation({
            mutationFn: (id: string) => notificationService.readNotify(id),
            onSuccess: () => {
                enqueueSnackbar("Đã xem", { variant: "success" })
                queryClient.resetQueries({ queryKey: [QueryKeysNotification.getMyNotification] })
            },
            onError: (err) => {
                enqueueSnackbar(err.message, { variant: "error" })
            }
        })
    }
    const OnDeleteNotification = () => {
        return useMutation({
            mutationFn: () => notificationService.deleteNotify(`${me?.id}`),
            onSuccess: () => {
                enqueueSnackbar("Xóa tin nhắn thành công", { variant: "success" })
            },
            onError: (err) => {
                enqueueSnackbar(err.message, { variant: "error" })
            }
        })
    }
    return {
        HandleGetMyNotification, OnReadNotification, OnDeleteNotification, HandleDetailNotification
    }
}

export default useNotification