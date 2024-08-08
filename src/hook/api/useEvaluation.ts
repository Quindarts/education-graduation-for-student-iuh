import EvaluationService from '@/services/EvaluationService'
import useTermStore from '@/store/termStore'
import { useQuery } from '@tanstack/react-query'
enum QueryKeysEvaluation {
    getAllEvaluationByType = "getAllEvaluationByType"
}
function useEvaluation() {
    const term = useTermStore(state => state.term)
    const evaluationService = new EvaluationService()
    const HandleGetAllEvaluationByType = (type: string) => {
        const { data, isLoading, isSuccess, isFetching, ...rest } = useQuery({
            queryKey: [QueryKeysEvaluation.getAllEvaluationByType, type],
            queryFn: () => evaluationService.getAllReviewByType(term.id, type),
            staleTime: 1000 * (60 * 20),
            select(data) {
                return data.evaluations
            }
        })
        return {
            evaluations: data,
            isLoading,
            isFetching,
            isSuccess,
            ...rest,
        }
    }
    return {
        HandleGetAllEvaluationByType
    }
}

export default useEvaluation