import useUserStore from '@/store/userStore';
import { Box, Typography } from '@mui/material';
import MessageLoaderWithLinearProgress from './MessageLoader';
import { MessageJSX, MessageText } from './Mess';
import { EnumChatMessageType } from '@/types/enum';
import { useContext, useEffect, useRef } from 'react';
import { ChatStore } from '@/page/ChatBox';
import useTermStore from '@/store/termStore';

const ChatBody = () => {
  const me = useUserStore((s) => s.me);
  const { messages, isLoading } = useContext(ChatStore);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { partOfTerm, term } = useTermStore();
  return (
    <Box
      sx={{
        flex: 1,
        padding: '16px',
        overflowY: 'auto',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      <Box sx={{ alignSelf: 'flex-start', maxWidth: '70%' }}>
        <MessageJSX
          type={EnumChatMessageType.REPLY}
          messageJSX={
            <>
              Xin chào{' '}
              <Typography variant='body1' component={'span'} color='primary'>
                {me.fullName}
              </Typography>{' '}
              😊, Tôi là chatbox tư vấn đề tài cho sinh viên thực hiện khóa luận tốt nghiệp. Tôi có
              thể giúp gì cho bạn? 🎉
            </>
          }
        />
      </Box>
      {messages.map((message, index) => (
        <>
          <MessageText type={EnumChatMessageType.SEND} message={message.name} />
          <MessageText type={EnumChatMessageType.REPLY} message={message.reply} />
        </>
      ))}
      <MessageLoaderWithLinearProgress isLoading={isLoading} />
      <div ref={messagesEndRef} />
    </Box>
  );
};

export default ChatBody;
