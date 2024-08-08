import { IMajor } from "@/types/major.type";
import { create } from "zustand";

interface MajorActions {
    setMajor: (major: IMajor) => void;
}
interface MajorState {
    major: IMajor,
}

const useMajorStore = create<MajorActions & MajorState>((set) => ({
    major: {},
    setMajor: (data: IMajor) => set({ major: { ...data } })
}))

export default useMajorStore;   