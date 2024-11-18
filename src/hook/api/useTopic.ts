import TopicService from '@/services/TopicService'
import useMajorStore from '@/store/majorStore';
import useTermStore from '@/store/termStore';
import { keepPreviousData, useMutation, useQuery } from '@tanstack/react-query'
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { queryClient } from '@/providers/ReactQuery';
import GroupStudentService from '@/services/GroupStudentService';
import { QueryKeysGroupStudent } from './useGroupStudent';
import useParams from '../ui/useParams';
import useTopicStore from '@/store/topicStore';

enum QueryKeysTopic {
    getListTopicByTermByMajor = "getListTopicByTermByMajor",
    getMyTopic = 'getMyTopic',
    getTopicById = "getTopicById",
    searchTopic = "searchTopic",
    getKeywords = "getKeywords"
}

function useTopic() {
    const topicService = new TopicService();
    const groupStudentService = new GroupStudentService();
    const currentTermId = useTermStore(s => s.term.id);
    const majorId = useMajorStore(s => s.major.id);
    const { getQueryField, setLimit, setPage } = useParams()
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar()
    const setTotalPageTopics = useTopicStore(s => s.setTotalPageTopics)
    const totalPages = useTopicStore(s => s.totalPages)

    const HandleGetTopicById = (topicId: string) => {
        return useQuery({
            queryKey: [QueryKeysTopic.getTopicById, topicId],
            queryFn: () => topicService.getTopicId(`${topicId}`),
            staleTime: 1000 * (120 * 60),
        })
    }

    const HandleGetKeywords = () => {
        const fetch = useQuery({
            queryKey: [QueryKeysTopic.getKeywords, currentTermId],
            queryFn: () => topicService.getKeywords(`${currentTermId}`),
            select(data: any) {
                return data?.keywords;
            },
            staleTime: 1000 * (20 * 60),
        })
        return {
            keywords: fetch.data,
            isLoading: fetch.isLoading,
            isSuccess: fetch.isSuccess,
            refetch: fetch.refetch
        }
    }

    const HandleSearchTopic = () => {
        getQueryField('limit') ? getQueryField('limit') : setLimit(10)
        getQueryField('page') ? getQueryField('page') : setPage(1)
        return useQuery({
            queryKey: [QueryKeysTopic.searchTopic, currentTermId, getQueryField('limit'), getQueryField('page'), getQueryField('searchField'), getQueryField('sort'), getQueryField('keywords')],
            queryFn: () => topicService.getTopicsOfSearch(currentTermId, getQueryField('searchField'), getQueryField("keywords"), getQueryField("sort"), getQueryField('limit'), getQueryField('page')),
            select(data: any) {
                const totalPages = data.params ? data.params.totalPage : 0;
                setTotalPageTopics(totalPages)
                return data;
            },
            refetchInterval: 1000 * (20 * 60),
            staleTime: 1000 * (20 * 60),
            placeholderData: keepPreviousData,
        })
    }
    const HandleGetMyTopic = (myTopicId: string) => {
        return useQuery({
            queryKey: [QueryKeysTopic.getMyTopic, myTopicId],
            queryFn: () => topicService.getTopicId(`${myTopicId}`),
            enabled: !!myTopicId,
            staleTime: 1000 * (20 * 60),

        })
    }

    const HandleGetAllTopic = () => {
        return useQuery({
            queryKey: [QueryKeysTopic.getListTopicByTermByMajor, currentTermId, majorId],
            queryFn: () => topicService.getTopicList(`${currentTermId}`, `${majorId}`),
            staleTime: 1000 * (20 * 60),
        })
    }
    const OnCancelTopic = () => {
        return useMutation({
            mutationFn: (groupStudentId) => groupStudentService.cancelTopic(`${groupStudentId}`),
            onSuccess() {
                enqueueSnackbar('Hủy Đề tài thành công', { variant: "success" })
                navigate("/topics")
                queryClient.resetQueries({ queryKey: [QueryKeysTopic.searchTopic, currentTermId, '10', '1', ''] })
                queryClient.resetQueries({ queryKey: [QueryKeysGroupStudent.getMyGroupStudent, currentTermId] })

            },
            onError(error: any) {
                if (error.status < 500)
                    enqueueSnackbar(error.message, { variant: "error" })
                else {
                    enqueueSnackbar("Thao tác thất bại vui lòng refresh lại trang", { variant: "warning" })
                    // navigate('/group-students/detail');
                }
            }
        })
    }
    const OnChooseTopic = () => {
        return useMutation({
            mutationFn: ({ groupStudentId, topicId }: any) => groupStudentService.chooseTopic(`${groupStudentId}`, topicId),
            onSuccess() {
                enqueueSnackbar('Chọn Đề tài thành công', { variant: "success" })
                navigate("/topics/my-topic")
                queryClient.resetQueries({ queryKey: [QueryKeysTopic.searchTopic, currentTermId, '10', '1', ''] })
                queryClient.resetQueries({ queryKey: [QueryKeysGroupStudent.getMyGroupStudent, currentTermId] })

            },
            onError(error: any) {
                if (error.status < 500)
                    enqueueSnackbar(error.message, { variant: "error" })
                else {
                    enqueueSnackbar("Thao tác thất bại vui lòng refresh lại trang", { variant: "warning" })

                }
            }
        })
    }
    return {
        totalPages,
        HandleGetMyTopic,
        HandleGetAllTopic,
        HandleGetKeywords,
        OnCancelTopic,
        OnChooseTopic,
        HandleSearchTopic,
        HandleGetTopicById
    }
}

export default useTopic