import { queryClient } from "@/providers/ReactQuery";
import GroupStudentService from "@/services/GroupStudentService"
import useTermStore from "@/store/termStore"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";


enum QueryKeysGroupStudent {
    getCurrentGroupStudentTerm = 'getCurrentGroupStudentTerm',
    getMyGroupStudent = 'getMyGroupStudent',
}
function useGroupStudent() {
    const currentTermId = useTermStore(s => s.term.id)
    const groupStudentService = new GroupStudentService();
    const { enqueueSnackbar } = useSnackbar()
    const navigate = useNavigate();

    const HandleGroupStudentByTerm = () => {
        return useQuery({
            queryKey: [QueryKeysGroupStudent.getCurrentGroupStudentTerm, currentTermId],
            queryFn: () => groupStudentService.getListGroup(`${currentTermId}`)
        })
    }

    const OnInviteGroupStudent = () => {
        return useMutation({
            mutationFn: (groupId) => groupStudentService.joinGroup(`${groupId}`),
            onSuccess: () => {
                enqueueSnackbar('Tham gia nhóm sinh viên thành công', { variant: "success" })
                queryClient.resetQueries({ queryKey: [QueryKeysGroupStudent.getCurrentGroupStudentTerm, currentTermId] })
                navigate('/dashboard/group-students/detail');
            },
            onError: (error: any) => {
                enqueueSnackbar(error.message, { variant: "error" })
            },
        })
    }
    const OnLeaveGroupStudent = () => {
        return useMutation({
            mutationFn: (groupId) => groupStudentService.leaveGroup(`${groupId}`),
            onSuccess: (data: any) => {
                if (data.success === true) {
                    enqueueSnackbar('Rời nhóm thành công', { variant: "success" })
                    queryClient.resetQueries({ queryKey: [QueryKeysGroupStudent.getMyGroupStudent, currentTermId] })
                    queryClient.resetQueries({ queryKey: [QueryKeysGroupStudent.getCurrentGroupStudentTerm, currentTermId] })
                    navigate('/dashboard/group-students');
                }
            },
            onError: (error: any) => {
                enqueueSnackbar(error.message, { variant: "error" })
            },
        })
    }
    const HandleGetMyGroupStudent = () => {
        return useQuery({
            queryKey: [QueryKeysGroupStudent.getMyGroupStudent, currentTermId],
            queryFn: () => groupStudentService.getMyGroup(`${currentTermId}`),
            staleTime: Infinity
        })
    }
    const HandleGetGroupStudentById = () => {

    }
    return { HandleGroupStudentByTerm, HandleGetMyGroupStudent, HandleGetGroupStudentById, OnInviteGroupStudent, OnLeaveGroupStudent }
}

export default useGroupStudent