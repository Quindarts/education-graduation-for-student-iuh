import { create } from "zustand";

interface GroupStudentActions {
    setMyGroupId: (groupId: string) => void;
    setMyGroupDetail: (groupDetails: any) => void;
}
interface GroupStudentState {
    groupId: string,
    groupDetails?: any
}

const useGroupStudentStore = create<GroupStudentActions & GroupStudentState>((set) => ({
    groupId: '',
    groupDetails: {},
    setMyGroupId: (groupId: string) => set({ groupId: groupId }),
    setMyGroupDetail: (groupDetails: any) => set({ groupDetails: groupDetails }),

}))

export default useGroupStudentStore;   