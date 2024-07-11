import { ITerm } from '@/types/term.type';
import { create } from "zustand";

interface TermActions {
    setCurrentTerm: (term: ITerm) => void;
}
interface TermState {
    term: ITerm,
}

const useTermStore = create<TermActions & TermState>((set) => ({
    term: {},
    setCurrentTerm: (data: ITerm) => set({ term: { ...data } })
}))

export default useTermStore;   