import TermService from "@/services/TermService";
import useTermStore from "@/store/termStore";
import { checkListPartOfTerm } from "@/utils/validations/term.validation";
import { useQuery } from "@tanstack/react-query";

enum QueryKeysTerm {
    getCurrentTerm = 'getCurrentTerm'
}

function useTerm() {
    const termService = new TermService();
    const setCurrentTerm = useTermStore(s => s.setCurrentTerm)
    const setPartOfTerm = useTermStore(s => s.setPartOfTerm)

    const HandleGetCurrentTerm = (majorId: string) => {
        useQuery({
            queryKey: [QueryKeysTerm.getCurrentTerm, majorId],
            queryFn: () => termService.getTermNow(majorId),
            staleTime: 5000,
            select(data) {
                setCurrentTerm(data.term);
                setPartOfTerm(checkListPartOfTerm(data.term))
                return data;
            },
        });
    }

    return {
        HandleGetCurrentTerm
    }


}

export default useTerm