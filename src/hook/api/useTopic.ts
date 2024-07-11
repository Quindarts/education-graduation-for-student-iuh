import TopicService from '@/services/TopicService'
import useMajorStore from '@/store/majorStore';
import useTermStore from '@/store/termStore';
import { useMutation, useQuery } from '@tanstack/react-query'
import { useSnackbar } from 'notistack';

enum QueryKeysTopic {
    getListTopicByTermByMajor = "getListTopicByTermByMajor",
}

function useTopic() {
    const topicService = new TopicService();
    const currentTermId = useTermStore(s => s.term.id);
    const majorId = useMajorStore(s => s.major.id);
    const { enqueueSnackbar } = useSnackbar()

    const HandleGetAllTopic = () => {
        return useQuery({
            queryKey: [QueryKeysTopic.getListTopicByTermByMajor, currentTermId, majorId],
            queryFn: () => topicService.getTopicList(`${currentTermId}`, `${majorId}`),
        })
    }
    const OnCancelTopic = () => {
        return useMutation({
            mutationFn: (groupStudentId) => topicService.cancelTopic(`${groupStudentId}`),
            onSuccess() {
                enqueueSnackbar('Hủy Đề tài thành công', { variant: "success" })
            },
            onError() {
                enqueueSnackbar('Hủy Đề tài thất bại. Thử lại sau', { variant: "error" })

            }
        })
    }
    const OnChooseTopic = () => {
        return useMutation({
            mutationFn: ({ groupStudentId, topicId }: any) => topicService.chooseTopic(`${groupStudentId}`, topicId),
            onSuccess() {
                enqueueSnackbar('Chọn Đề tài thành công', { variant: "success" })
            },
            onError() {
                enqueueSnackbar('Chọn Đề tài thất bại. Thử lại sau', { variant: "error" })
            }
        })
    }
    return {
        HandleGetAllTopic,
        OnCancelTopic,
        OnChooseTopic
    }
}

export default useTopic