import { queryClient } from "@/providers/ReactQuery"
import ArticleService from "@/services/ArticleService"
import useGroupStudentStore from "@/store/groupStudentStore"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useSnackbar } from "notistack"
import useAuth from "./useAuth"
import useUserStore from "@/store/userStore"
import useTermStore from "@/store/termStore"
export const QueryKeysArticle = {
    ARTICLE: 'getArticleBystudentId',
}
const useArticle = () => {
    const { enqueueSnackbar } = useSnackbar()
    const term = useTermStore((s) => s.term)
    const articleService = new ArticleService()
    const HandleGetArticles = () => {
        const { data, isLoading, isSuccess, isFetching, ...rest } = useQuery({
            queryKey: [QueryKeysArticle.ARTICLE, term.id],
            queryFn: () => articleService.getArticleByStudentId(term.id),
            staleTime: 1000 * (60 * 4),
            select(data) {
                return data?.articles
            },
            enabled: !!term.id
        })
        return {
            articles: data,
            isLoading,
            isFetching,
            isSuccess,
            ...rest,
        }
    }
    const OnSubmitArticle = () => {
        return useMutation({
            mutationFn: (data: { name: string; type: string; author: string; authorNumber: number; publicDate: string; link: string }) => articleService.submitArticle({ ...data }),
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