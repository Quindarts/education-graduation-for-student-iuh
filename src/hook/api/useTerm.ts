import TermService from "@/services/TermService";
import useTermStore from "@/store/termStore";
import { useQuery } from "@tanstack/react-query";

enum QueryKeysTerm {
    getCurrentTerm = 'getCurrentTerm'
}
function useTerm() {
    const termService = new TermService();
    const setCurrentTerm = useTermStore(state => state.setCurrentTerm)

    const HandleGetCurrentTerm = () => {
        const { data, isSuccess } = useQuery({
            queryKey: [QueryKeysTerm.getCurrentTerm],
            queryFn: () => termService.getTermNow()
        });
        if (isSuccess) {
            setCurrentTerm(data.term);
        }
    }

    return {
        HandleGetCurrentTerm
    }


}

export default useTerm