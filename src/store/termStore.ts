import { IPartOfTerm, ITerm } from '@/types/term.type';
import { create } from "zustand";

interface TermActions {
    setCurrentTerm: (term: ITerm) => void;
    setPartOfTerm: (partOfTerm: IPartOfTerm) => void;
}
interface TermState {
    term: Partial<ITerm>,
    partOfTerm: Partial<IPartOfTerm>
}

const useTermStore = create<TermActions & TermState>((set) => ({
    term: {},
    partOfTerm: {},
    setCurrentTerm: (data: ITerm) => set({ term: { ...data } }),
    setPartOfTerm: (data: IPartOfTerm) => set({ partOfTerm: { ...data } }),

}))

export default useTermStore;   