import { create } from "zustand";

interface TopicActions {
    setMyTopic: (topicId: string) => void;
}
interface TopicState {
    myTopicId: string;
}

const useTopicStore = create<TopicActions & TopicState>((set) => ({
    myTopicId: '',
    setMyTopic: (myTopicId: string) => set({ myTopicId: myTopicId })
}))

export default useTopicStore;   