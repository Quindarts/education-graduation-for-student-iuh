import { create } from "zustand";

interface GroupStudentActions {
    setMyGroupId: (groupId: string) => void;
}
interface GroupStudentState {
    groupId: string,
}

const useGroupStudentStore = create<GroupStudentActions & GroupStudentState>((set) => ({
    groupId: '',
    setMyGroupId: (groupId: string) => set({ groupId: groupId })
}))

export default useGroupStudentStore;   