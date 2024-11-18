import { EnumChatMessageType } from '@/types/enum';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export interface MessageTextProps {
  message: string;
  type?: EnumChatMessageType;
}

export interface MessageLinkProps {
  message: string;
  link: string;
  type?: EnumChatMessageType;
}

export interface MessageJSXProps {
  messageJSX: JSX.Element;
  type: EnumChatMessageType;
}

const MessageText = ({ message, type = EnumChatMessageType.REPLY }) => {
  return (
    <Typography
      sx={{
        backgroundColor: type === EnumChatMessageType.SEND ? '#002366' : '#fff',
        color: type === EnumChatMessageType.SEND ? '#fff' : '#002366',
        alignSelf: type === EnumChatMessageType.REPLY ? 'flex-start' : 'flex-end',
        padding: '8px',
        borderRadius: '8px',
      }}
    >
      {message}
    </Typography>
  );
};
const MessageLink = ({ link, message, type = EnumChatMessageType.REPLY }) => {
  const navigate = useNavigate();
  return (
    <>
      <Typography
        sx={{
          backgroundColor: type === EnumChatMessageType.SEND ? '#002366' : '#fff',
          color: type === EnumChatMessageType.SEND ? '#fff' : '#002366',
          alignSelf: type === EnumChatMessageType.REPLY ? 'flex-start' : 'flex-end',
          padding: '8px',
          borderRadius: '8px',
        }}
      >
        {message}
        <Typography component='a' variant='body1' color='initial'>
          {link}
        </Typography>
      </Typography>
    </>
  );
};
const MessageJSX = ({ messageJSX, type = EnumChatMessageType.REPLY }) => {
  return (
    <Box
      sx={{
        fontSize: 13,
        color: type === EnumChatMessageType.SEND ? '#fff' : '#002366',
        alignSelf: type === EnumChatMessageType.REPLY ? 'flex-start' : 'flex-end',
        padding: '8px',
        borderRadius: '8px',
        backgroundColor: type === EnumChatMessageType.SEND ? '#002366' : '#fff',
      }}
    >
      {messageJSX}
    </Box>
  );
};
export { MessageText, MessageLink, MessageJSX };
