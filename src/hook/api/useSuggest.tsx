import { ChatStore } from '@/page/ChatBox';
import { SuggestService } from '@/services/SuggestService';
import useTermStore from '@/store/termStore';
import { Box, Button, Typography } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function useSuggest() {
  const suggestService = new SuggestService();
  const term = useTermStore((state) => state.term);
  const { handleSetMessages } = useContext(ChatStore);
  const navigate = useNavigate();
  const OnSuggestTopic = () => {
    return useMutation({
      mutationFn: (message: string) => suggestService.suggestTopic(term.id, message),
      onSuccess: (data) => {
        handleSetMessages({
          name: 'Kết quả tìm kiếm',
          reply: (
            <Box width={'100%'}>
              <>
                {data?.data?.length === 0 ? (
                  <Typography variant='body1' color='initial'>
                    Không tìm thấy đề tài phù hợp
                  </Typography>
                ) : (
                  data?.data?.map((topic) => (
                    <Button fullWidth onClick={() => navigate(`/topics/${topic.id}`)}>{topic?.name}</Button>
                  ))
                )}
              </>
            </Box>
          ),
        });
      },
    });
  };
  return {
    OnSuggestTopic,
  };
}

export default useSuggest;
