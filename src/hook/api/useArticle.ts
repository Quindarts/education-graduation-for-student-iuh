import { queryClient } from "@/providers/ReactQuery"
import ArticleService from "@/services/ArticleService"
import useGroupStudentStore from "@/store/groupStudentStore"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useSnackbar } from "notistack"
export const QueryKeysArticle = {
    ARTICLE: 'getArticleByGroupStudentId',
}
const useArticle = () => {
    const { enqueueSnackbar } = useSnackbar()
    const groupId = useGroupStudentStore(s => s.groupId)
    const articleService = new ArticleService()
    const HandleGetArticles = () => {
        const { data, isLoading, isSuccess, isFetching, ...rest } = useQuery({
            queryKey: [QueryKeysArticle.ARTICLE, groupId],
            queryFn: () => articleService.getArticleByGroupStudentId(groupId),
            staleTime: 1000 * (60 * 4),
            select(data) {
                return data?.article
            },
            enabled: !!groupId
        })
        return {
            article: data,
            isLoading,
            isFetching,
            isSuccess,
            ...rest,
        }
    }
    const OnSubmitArticle = () => {
        return useMutation({
            mutationFn: (data: { name: string; type: string; author: string; authorNumber: number; publicDate: string; link: string }) => articleService.submitArticle({ ...data, groupStudentId: groupId }),
            onError: (error) => {
                enqueueSnackbar('Thao tác thất bại, thử lại', { variant: "error" });
            },
            onSuccess: () => {
                enqueueSnackbar('Submit bài báo thành công', { variant: "success" });
                queryClient.resetQueries({ queryKey: [QueryKeysArticle.ARTICLE] })
            },
        })
    }
    return {
        HandleGetArticles,
        OnSubmitArticle
    }
}

export default useArticle