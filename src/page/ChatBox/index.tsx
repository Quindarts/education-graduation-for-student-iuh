import { Box } from '@mui/material';
import ChatHeader from '@/components/ui/Chat/ChatHeader';
import ChatBody from '@/components/ui/Chat/ChatBody';
import QuickReplyButtons from '@/components/ui/Chat/QuickReplyButtons';
import ChatInput from '@/components/ui/Chat/ChatInput';
import React, { createContext, useState } from 'react';
type MessageType = {
  name: string;
  reply: React.ReactNode | string;
  type?: string;
};
type ChatStateType = {
  messages: MessageType[];
  isLoading: boolean;
  handleSetMessages: (newMessage: MessageType) => void;
  handleLoading: (loading: boolean) => void;
};
const initChatState: ChatStateType = {
  messages: [],
  isLoading: false,
  handleSetMessages: () => {},
  handleLoading: () => {},
};

export const ChatStore = createContext(initChatState);

const ChatBox = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSetMessages = (newMessage: MessageType) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };
  const handleLoading = (loading: boolean) => {
    setIsLoading(loading);
  };
  return (
    <ChatStore.Provider
      value={{
        messages,
        isLoading,
        handleSetMessages,
        handleLoading,
      }}
    >
      <Box
        sx={{
          width: '400px',
          height: '600px',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #ddd',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <ChatHeader />
        <ChatBody />
        <QuickReplyButtons />
        <ChatInput />
      </Box>
    </ChatStore.Provider>
  );
};

export default ChatBox;
