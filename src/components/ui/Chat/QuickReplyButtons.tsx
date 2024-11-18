import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ChatStore } from '@/page/ChatBox';
import useTopic from '@/hook/api/useTopic';
import useSuggest from '@/hook/api/useSuggest';
import useTermStore from '@/store/termStore';
import { ENUM_STATUS_OF_DATE_TERM } from '@/utils/validations/term.validation';

const QuickReplyButtons = () => {
  const { handleSetMessages } = useContext(ChatStore);
  const { OnSuggestTopic } = useSuggest();
  const { partOfTerm, term } = useTermStore();
  const { mutate: suggestFetch, isSuccess } = OnSuggestTopic();

  const { HandleGetKeywords } = useTopic();
  const { keywords } = HandleGetKeywords();

  const isAprrovedSuggest =
    partOfTerm.ChooseTopic?.status === ENUM_STATUS_OF_DATE_TERM.ACTIVE ||
    partOfTerm.PublicTopic?.status === ENUM_STATUS_OF_DATE_TERM.ACTIVE;

  const replyOnPart = isAprrovedSuggest ? (
    <Box>
      <Typography variant='body1' color='initial'>
        Chọn từ khóa bạn muốn tìm kiếm:
      </Typography>
      <Box>
        {keywords?.map((keyword: any, key: number) => (
          <Button
            key={key}
            onClick={() => {
              handleSetMessages({
                name: `Tìm kiếm đề tài theo từ khóa: ${keyword}`,
                reply: 'Đang tìm kiếm...',
              });
              suggestFetch(keyword);
            }}
          >
            {keyword}
          </Button>
        ))}
      </Box>
    </Box>
  ) : (
    <Box>
      <Typography variant='body1' color='initial'>
        Tiếc quá 😢, giai đoạn công bố và chọn đề tài chưa diễn ra hoặc đã kết thúc.
      </Typography>
    </Box>
  );
  const handleClick = async () => {
    handleSetMessages({
      name: 'Tôi muốn tìm đề tài theo các từ khóa',
      reply: replyOnPart,
      type: 'string',
    });
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        gap: '8px',
        padding: '8px',
        backgroundColor: 'grey.200',
      }}
    >
      <Button onClick={handleClick} variant='outlined' size='small'>
        Tìm đề tài theo các từ khóa
      </Button>
    </Box>
  );
};

export default QuickReplyButtons;
