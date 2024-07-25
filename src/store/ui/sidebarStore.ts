import { create } from "zustand";

interface SidebarActions {
    toggleSidebar: () => void;
}
interface SidebarState {
    isOpen: boolean,
}

const useSidebarStore = create<SidebarActions & SidebarState>((set) => ({
    isOpen: true,
    toggleSidebar: () => set((pre) => ({ isOpen: !pre.isOpen })),
}))

export default useSidebarStore;   