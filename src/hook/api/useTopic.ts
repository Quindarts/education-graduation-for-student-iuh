import TopicService from '@/services/TopicService'
import useMajorStore from '@/store/majorStore';
import useTermStore from '@/store/termStore';
import { useMutation, useQuery } from '@tanstack/react-query'
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { queryClient } from '@/providers/ReactQuery';
import GroupStudentService from '@/services/GroupStudentService';
import { QueryKeysGroupStudent } from './useGroupStudent';
import useParams from '../ui/useParams';

enum QueryKeysTopic {
    getListTopicByTermByMajor = "getListTopicByTermByMajor",
    getMyTopic = 'getMyTopic',
    getTopicById = "getTopicById",
    searchTopic = "searchTopic"
}

function useTopic() {
    const topicService = new TopicService();
    const groupStudentService = new GroupStudentService();
    const currentTermId = useTermStore(s => s.term.id);
    const majorId = useMajorStore(s => s.major.id);
    const { getQueryField } = useParams()

    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar()


    const HandleGetTopicById = (topicId: string) => {
        return useQuery({
            queryKey: [QueryKeysTopic.getTopicById, topicId],
            queryFn: () => topicService.getTopicId(`${topicId}`),
        })
    }
    const HandleSearchTopic = () => {
        return useQuery({
            queryKey: [QueryKeysTopic.searchTopic, currentTermId, getQueryField('keywords')],
            queryFn: () => topicService.getTopicsOfSearch(currentTermId, getQueryField('keywords'))
        })
    }

    const HandleGetMyTopic = (myTopicId: string) => {
        return useQuery({
            queryKey: [QueryKeysTopic.getMyTopic, myTopicId],
            queryFn: () => topicService.getTopicId(`${myTopicId}`),
            enabled: !!myTopicId,
            staleTime: 1000,
        })
    }

    const HandleGetAllTopic = () => {
        return useQuery({
            queryKey: [QueryKeysTopic.getListTopicByTermByMajor, currentTermId, majorId],
            queryFn: () => topicService.getTopicList(`${currentTermId}`, `${majorId}`),
            staleTime: 1000,
        })
    }
    const OnCancelTopic = () => {
        return useMutation({
            mutationFn: (groupStudentId) => groupStudentService.cancelTopic(`${groupStudentId}`),
            onSuccess() {
                enqueueSnackbar('Hủy Đề tài thành công', { variant: "success" })
                navigate("/topics")
                queryClient.resetQueries({ queryKey: [QueryKeysTopic.searchTopic, currentTermId, ''] })
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
                navigate("/topics/my-topic")
                queryClient.resetQueries({ queryKey: [QueryKeysTopic.searchTopic, currentTermId, ''] })
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
        HandleSearchTopic,
        HandleGetTopicById
    }
}

export default useTopic