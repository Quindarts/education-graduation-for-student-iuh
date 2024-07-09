import TitleManager from '@/components/ui/Title';
import { Box } from '@mui/material';
import React from 'react';
import CardFeed from './CardFeed';
import feedImg from '../../../../public/images/feedImg.png';
const ListCardFeed = [
  {
    title: ' [Ngành KTPM]: về Khóa luận tốt nghiệp và Thực tập doanh nghiệp HK1 2024-2025 ',
    description:
      'Lưu ý: thông báo này dành cho sinh viên ngành Kỹ thuật phần mềm - khoa CNTT (1) Khóa luận tốt nghiệp (KLTN)....',
    image: feedImg,
  },
  {
    title: ' Danh sách báo cáo Khóa luận tốt nghiệp (hệ ĐH) HK2/2023-2024',
    description:
      'Khoa CNTT thông báo: * Thời gian tập trung sinh viên treo poster và đánh giá Hội đồng: sáng thứ sáu ngày 31/5/2024, lúc...',
    image: feedImg,
  },
  {
    title: ' [Ngành CNTT] Danh sách báo cáo Khóa luận tốt nghiệp (hệ ĐH) HK2/2023-2024',
    description:
      'Các Sinh viên ngành CNTT có tên trong danh sách đính kèm, chuẩn bi Poster để báo cáo KLTN vào sáng ngày 31/05/2024....',
    image: feedImg,
  },
  {
    title:
      'Thông báo thời gian đánh giá Khóa luận tốt nghiệp, Thực tập doanh nghiệp, Bài tập lớn học phần hệ ĐH, CĐ_HK2/2023-2024 ',
    description:
      'Khoa CNTT thông báo đến các bạn sinh viên hệ Đại học, Bài tập lớn học phần như...',
    image: feedImg,
  },
];
function NewFeedSection() {
  return (
    <Box
      borderTop={'10px solid #990303'}
      px={30}
      bgcolor={'rgba(249, 248, 248, 0.9)'}
      paddingY={30}
    >
      <Box display={'flex'} justifyContent={'space-between'}>
        <TitleManager variant='h3' textTransform={'uppercase'}>
          Tin mới nhất
        </TitleManager>
        <TitleManager fontWeight={500} variant='h6'>
          Xem chi tiết
        </TitleManager>
      </Box>
      <Box my={10} display={'flex'} gap={20}>
        {ListCardFeed.map((feed, index: number) => (
          <CardFeed
            key={index}
            title={feed.title}
            description={feed.description}
            image={feed.image}
          />
        ))}
      </Box>
    </Box>
  );
}

export default NewFeedSection;
