import { IUser } from "@/types/auth.type";
import { create } from "zustand";

export interface UserActions {
    setMe: (me: IUser) => void;
}
export interface UserState {
    me: IUser | undefined,
}

const useUserStore = create<UserActions & UserState>((set) => ({
    me: {},
    setMe: (data: IUser) => set({ me: { ...data } })
}))


export default useUserStore