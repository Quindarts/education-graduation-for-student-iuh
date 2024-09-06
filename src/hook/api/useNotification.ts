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
            staleTime: 60 * 60 * 1000,
        });
    }


    const HandleGetMyNotification = (limit: string) => {
        return useQuery({
            queryKey: [QueryKeysNotification.getMyNotification],
            queryFn: () => notificationService.getMyNotification(limit),
            staleTime: 60 * 10 * 1000,
            select(data: any) {
                return data?.notifications;
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
            onError: (error: any) => {
                if (error < 500) {
                    enqueueSnackbar(error.message, { variant: "error" })
                } else {
                    enqueueSnackbar("Thao tác thất bại vui lòng refresh lại trang", { variant: "warning" })
                }
            },
        })
    }
    const OnDeleteNotification = () => {
        return useMutation({
            mutationFn: () => notificationService.deleteNotify(`${me?.id}`),
            onSuccess: () => {
                enqueueSnackbar("Xóa tin nhắn thành công", { variant: "success" })
            },
            onError: (error: any) => {
                if (error < 500) {
                    enqueueSnackbar(error.message, { variant: "error" })
                } else {
                    enqueueSnackbar("Thao tác thất bại vui lòng refresh lại trang", { variant: "warning" })
                }
            },
        })
    }
    return {
        HandleGetMyNotification, OnReadNotification, OnDeleteNotification, HandleDetailNotification
    }
}

export default useNotification