import { queryClient } from "@/providers/ReactQuery"
import useGroupStudentStore from "@/store/groupStudentStore"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useSnackbar } from "notistack"
import useAuth from "./useAuth"
import useUserStore from "@/store/userStore"
import useTermStore from "@/store/termStore"
import FinalReportService from "@/services/FInalReport"
export const QueryKeysFinalReport = {
    FinalReport: 'getFinalReportBystudentId',
}
const useFinalReport = () => {
    const { enqueueSnackbar } = useSnackbar()
    const term = useTermStore((s) => s.term)
    const finalReportService = new FinalReportService()
    const HandleGetFinalReport = () => {
        const { data, isLoading, isSuccess, isFetching, ...rest } = useQuery({
            queryKey: [QueryKeysFinalReport.FinalReport, term.id],
            queryFn: () => finalReportService.getReportByGroupStudentId(term.id),
            staleTime: 1000 * (60 * 4),
            select(data) {
                return data.finalReport
            },
            enabled: !!term.id
        })
        return {
            finalReport: data,
            isLoading,
            isFetching,
            isSuccess,
            ...rest,
        }
    }
    return {
        HandleGetFinalReport,
    }
}

export default useFinalReport