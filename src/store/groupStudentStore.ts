import { create } from "zustand";

interface GroupStudentActions {
    setMyGroupId: (groupId: string) => void;
    setMyGroupDetail: (groupDetails: any) => void;
    setMembersOfGroup: (members: any) => void;
}
interface GroupStudentState {
    groupId: string,
    groupDetails?: any
    members?: any[]
}

const useGroupStudentStore = create<GroupStudentActions & GroupStudentState>((set) => ({
    groupId: '',
    groupDetails: {},
    members: [],
    setMyGroupId: (groupId: string) => set({ groupId: groupId }),
    setMyGroupDetail: (groupDetails: any) => set({ groupDetails: groupDetails }),
    setMembersOfGroup: (members: any) => set({ members: members })

}))

export default useGroupStudentStore;   