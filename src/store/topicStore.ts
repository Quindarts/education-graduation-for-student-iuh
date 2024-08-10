import { create } from "zustand";

interface TopicActions {
    setMyTopic: (topicId: string) => void;
    setTotalPageTopics: (totalPages: number) => void;
}
interface TopicState {
    myTopicId: string;
    totalPages: number;
}

const useTopicStore = create<TopicActions & TopicState>((set) => ({
    myTopicId: '',
    totalPages: 0,
    setMyTopic: (myTopicId: string) => set({ myTopicId: myTopicId }),
    setTotalPageTopics: (totalPages: number) => set({ totalPages: totalPages }),
}))

export default useTopicStore;   