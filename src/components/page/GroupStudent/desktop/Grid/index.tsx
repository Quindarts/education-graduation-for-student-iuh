import { Box, Typography } from '@mui/material';
import React from 'react';
import CardGroupStudent from './Card';
import useTermStore from '@/store/termStore';
import { ENUM_STATUS_OF_DATE_TERM } from '@/utils/validations/term.validation';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function GridGroupStudent({ groupStudents }: any) {
  const { partOfTerm } = useTermStore();
  return (
    <Box display={'flex'} gap={4} flexWrap='wrap' width={'100%'}>
      {partOfTerm.ChooseGroup?.status === ENUM_STATUS_OF_DATE_TERM.EXPIRED ? (
        <Box
          height={500}
          width={'100%'}
          alignItems={'center'}
          justifyContent={'center'}
          flexDirection={'column'}
          display={'flex'}
        >
          <DotLottieReact
            style={{
              width: '350px',
              height: '350px',
            }}
            src='https://lottie.host/d5ee136a-961a-4bc7-bfa6-709dcb8e1038/WNAl4pFATV.json'
            loop
            autoplay
          />
          <Typography
            sx={{
              position: 'relative',
              top: 0,
            }}
            variant='h4'
            fontWeight={'500'}
            color='grey.600'
          >
            Đã hết hạn đăng kí Nhóm.
          </Typography>
        </Box>
      ) : (
        <>
          {partOfTerm.ChooseGroup?.status === ENUM_STATUS_OF_DATE_TERM.INACTIVE ? (
            <>
              <Box
                height={500}
                width={'100%'}
                alignItems={'center'}
                justifyContent={'center'}
                flexDirection={'column'}
                display={'flex'}
              >
                <img
                  style={{ opacity: 0.4 }}
                  width={100}
                  height={100}
                  src='/images/calendar.webp'
                />
                <Typography
                  variant='h1'
                  textTransform={'uppercase'}
                  fontWeight={'bold'}
                  color='grey.400'
                >
                  Sự kiện sắp diễn ra
                </Typography>
              </Box>
            </>
          ) : (
            <>
              {groupStudents?.map((gr: any) => (
                <CardGroupStudent numOfMembers={gr.numOfMembers} name={gr.name} groupId={gr.id} />
              ))}{' '}
            </>
          )}
        </>
      )}
    </Box>
  );
}

export default GridGroupStudent;
