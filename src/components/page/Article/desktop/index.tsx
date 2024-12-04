import { Box, Button, Paper } from '@mui/material';
import useArticle from '@/hook/api/useArticle';
import SekeletonUI from '@/components/ui/Sekeleton';
import TitleManager from '@/components/ui/Title';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import TableArticleManagement from './Table';
import SubmitModal from './Modal/SubmitModal';
function ArticleDesktop() {
  const { HandleGetArticles } = useArticle();
  const { articles, isLoading } = HandleGetArticles();
  const [openSubmitModal, setOpenSubmitModal] = useState(false);
  const handleOpenSubmitModal = () => setOpenSubmitModal(true);
  const handleCloseSubmitModal = () => setOpenSubmitModal(false);
  return (
    <>
      <Paper sx={{ px: 10, py: 12 }} elevation={0}>
        <Box display={'flex'} justifyContent={'space-between'}>
          <TitleManager
            variant='h6'
            mb={10}
            textTransform={'uppercase'}
            icon='ph:article-ny-times-duotone'
          >
            Bài báo khoa học của tôi
          </TitleManager>
          <Button
            onClick={handleOpenSubmitModal}
            variant='contained'
            size='small'
            color='error'
            startIcon={<Icon icon='mingcute:add-fill' />}
          >
            Thêm bài báo
          </Button>
        </Box>
        {isLoading ? <SekeletonUI /> : <TableArticleManagement rows={articles ? articles : []} />}
      </Paper>
      <SubmitModal open={openSubmitModal} onClose={handleCloseSubmitModal} />
    </>
  );
}

export default ArticleDesktop;
