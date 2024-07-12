import TopicService from '@/services/TopicService'
import useMajorStore from '@/store/majorStore';
import useTermStore from '@/store/termStore';
import { useMutation, useQuery } from '@tanstack/react-query'
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { queryClient } from '@/providers/ReactQuery';
import GroupStudentService from '@/services/GroupStudentService';
import useTopicStore from '@/store/topicStore';
import { QueryKeysGroupStudent } from './useGroupStudent';

enum QueryKeysTopic {
    getListTopicByTermByMajor = "getListTopicByTermByMajor",
    getMyTopic = 'getMyTopic'
}

function useTopic() {
    const topicService = new TopicService();
    const groupStudentService = new GroupStudentService();
    const currentTermId = useTermStore(s => s.term.id);
    const majorId = useMajorStore(s => s.major.id);
    const myTopicStoreId = useTopicStore(s => s.myTopicId)

    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar()


    const HandleGetTopicById = (topicId: string) => {
        return useQuery({
            queryKey: [QueryKeysTopic.getListTopicByTermByMajor, topicId],
            queryFn: () => topicService.getTopicId(`${topicId}`),
        })
    }

    const HandleGetMyTopic = (myTopicId: string) => {
        return useQuery({
            queryKey: [QueryKeysTopic.getMyTopic, myTopicId],
            queryFn: () => topicService.getTopicId(`${myTopicId}`),
            enabled: !!myTopicId,
        })
    }

    const HandleGetAllTopic = () => {
        return useQuery({
            queryKey: [QueryKeysTopic.getListTopicByTermByMajor, currentTermId, majorId],
            queryFn: () => topicService.getTopicList(`${currentTermId}`, `${majorId}`),
        })
    }
    const OnCancelTopic = () => {
        return useMutation({
            mutationFn: (groupStudentId) => groupStudentService.cancelTopic(`${groupStudentId}`),
            onSuccess() {
                enqueueSnackbar('Hủy Đề tài thành công', { variant: "success" })
                navigate("/dashboard/topics")
                queryClient.resetQueries({ queryKey: [QueryKeysTopic.getListTopicByTermByMajor, currentTermId, majorId] })
                queryClient.resetQueries({ queryKey: [QueryKeysGroupStudent.getMyGroupStudent, currentTermId] })
            },
            onError(error: any) {
                enqueueSnackbar(error.message, { variant: "error" })
            }
        })
    }
    const OnChooseTopic = () => {
        return useMutation({
            mutationFn: ({ groupStudentId, topicId }: any) => groupStudentService.chooseTopic(`${groupStudentId}`, topicId),
            onSuccess() {
                enqueueSnackbar('Chọn Đề tài thành công', { variant: "success" })
                navigate("/dashboard/topics/my-topic")
                queryClient.resetQueries({ queryKey: [QueryKeysTopic.getListTopicByTermByMajor, currentTermId, majorId] })
                queryClient.resetQueries({ queryKey: [QueryKeysGroupStudent.getMyGroupStudent, currentTermId] })
            },
            onError(error: any) {
                enqueueSnackbar(error.message, { variant: "error" })
            }
        })
    }
    return {
        HandleGetMyTopic,
        HandleGetAllTopic,
        OnCancelTopic,
        OnChooseTopic,
        HandleGetTopicById
    }
}

export default useTopic