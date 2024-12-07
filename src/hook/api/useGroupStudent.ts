import { queryClient } from "@/providers/ReactQuery";
import GroupStudentService from "@/services/GroupStudentService"
import useGroupStudentStore from "@/store/groupStudentStore";
import useTermStore from "@/store/termStore"
import useTopicStore from "@/store/topicStore";
import { useMutation, useQuery } from "@tanstack/react-query"
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

export enum QueryKeysGroupStudent {
    getCurrentGroupStudentTerm = 'getCurrentGroupStudentTerm',
    getMyGroupStudent = 'getMyGroupStudent',
    getGroupMembers = 'getGroupMembers'
}
function useGroupStudent() {
    const currentTermId = useTermStore(s => s.term.id)
    const groupStudentService = new GroupStudentService();
    const { enqueueSnackbar } = useSnackbar()
    const navigate = useNavigate();
    const setMyGroupId = useGroupStudentStore(s => s.setMyGroupId);
    const setMyGroupDetail = useGroupStudentStore(s => s.setMyGroupDetail);
    const setMembersOfGroup = useGroupStudentStore(s => s.setMembersOfGroup)
    const setMyTopic = useTopicStore(s => s.setMyTopic);
    const HandleGroupStudentByTerm = () => {
        return useQuery({
            queryKey: [QueryKeysGroupStudent.getCurrentGroupStudentTerm, currentTermId],
            queryFn: () => groupStudentService.getListGroup(`${currentTermId}`),
            staleTime: 20 * (60 * 1000),

        })
    }

    const OnSubmitReviewDocument = () => {
        return useMutation({
            mutationFn: (data: { groupId: string, link: string }) => groupStudentService.submitReviewDocument(data.groupId, data.link),
            onSuccess: () => {
                enqueueSnackbar('Nộp bài thành công', { variant: "success" })
                queryClient.resetQueries({ queryKey: [QueryKeysGroupStudent.getMyGroupStudent, currentTermId] })
            },
            onError: (error: any) => {
                if (error.status < 500) {
                    enqueueSnackbar(error.message, { variant: "error" })
                } else {
                    enqueueSnackbar("Thao tác thất bại vui lòng refresh lại trang", { variant: "warning" })
                }
            }
        })
    }
    const OnInviteGroupStudent = (groupId: string) => {
        return useMutation({
            mutationFn: (groupId) => groupStudentService.joinGroup(`${groupId}`),
            onSuccess: () => {
                enqueueSnackbar('Tham gia nhóm sinh viên thành công', { variant: "success" })
                queryClient.resetQueries({ queryKey: [QueryKeysGroupStudent.getGroupMembers, groupId] })
                queryClient.resetQueries({ queryKey: [QueryKeysGroupStudent.getMyGroupStudent, currentTermId] })
                queryClient.resetQueries({ queryKey: [QueryKeysGroupStudent.getCurrentGroupStudentTerm, currentTermId] })
                navigate('/group-students/detail');
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
    const OnAssignAdminGroupStudent = () => {
        return useMutation({
            mutationFn: (data: { groupId: string, studentId: string }) => groupStudentService.assignAdmin(data.groupId, data.studentId),
            onSuccess: () => {
                enqueueSnackbar('Phân Nhóm trưởng thành công', { variant: "success" })
                queryClient.resetQueries({ queryKey: [QueryKeysGroupStudent.getMyGroupStudent, currentTermId] })
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
    const OnRemoveMemberByAdmin = (groupId: string) => {
        return useMutation({
            mutationFn: (studentId: string) => groupStudentService.removeMember(groupId, `${studentId}`),
            onSuccess: () => {
                enqueueSnackbar('Xóa thành viên ra khỏi nhóm thành công', { variant: "success" })
                queryClient.resetQueries({ queryKey: [QueryKeysGroupStudent.getGroupMembers, groupId] })
                queryClient.resetQueries({ queryKey: [QueryKeysGroupStudent.getMyGroupStudent, currentTermId] })
                queryClient.resetQueries({ queryKey: [QueryKeysGroupStudent.getCurrentGroupStudentTerm, currentTermId] })
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
    const OnLeaveGroupStudent = (groupId: string) => {
        return useMutation({
            mutationFn: (groupId) => groupStudentService.leaveGroup(`${groupId}`),
            onSuccess: (data: any) => {
                if (data.success === true) {
                    enqueueSnackbar('Rời nhóm thành công', { variant: "success" })
                    queryClient.resetQueries({ queryKey: [QueryKeysGroupStudent.getGroupMembers, groupId] })
                    queryClient.resetQueries({ queryKey: [QueryKeysGroupStudent.getMyGroupStudent, currentTermId] })
                    queryClient.resetQueries({ queryKey: [QueryKeysGroupStudent.getCurrentGroupStudentTerm, currentTermId] })
                }
            },
            onError: (error: any) => {
                if (error.status < 500)
                    enqueueSnackbar(error.message, { variant: "error" })
                else {
                    enqueueSnackbar("Thao tác thất bại vui lòng refresh lại trang", { variant: "warning" })
                }

            },
        })
    }
    const HandleGetMyGroupStudent = () => {
        return useQuery({
            queryKey: [QueryKeysGroupStudent.getMyGroupStudent, currentTermId],
            queryFn: () => groupStudentService.getMyGroup(`${currentTermId}`),
            staleTime: 5 * (60 * 1000),
            select(data) {
                setMyGroupId(data.group.info.id)
                setMyGroupDetail(data.group.info)
                setMyTopic(data.group.info.topic_id)
                setMembersOfGroup(data.group.members)
                return data;
            },
            enabled: !!currentTermId
        })
    }
    const HandleGetGroupMembers = (groupId: string) => {
        return useQuery({
            queryKey: [QueryKeysGroupStudent.getGroupMembers, groupId],
            queryFn: () => groupStudentService.getGroupMembers(groupId),
        })
    }

    return {
        HandleGroupStudentByTerm,
        HandleGetGroupMembers,
        HandleGetMyGroupStudent,
        OnRemoveMemberByAdmin,
        OnSubmitReviewDocument,
        OnInviteGroupStudent,
        OnLeaveGroupStudent,
        OnAssignAdminGroupStudent
    }
}

export default useGroupStudent