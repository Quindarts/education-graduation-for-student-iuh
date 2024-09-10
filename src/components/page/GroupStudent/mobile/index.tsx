import useGroupStudent from '@/hook/api/useGroupStudent';
import { Icon } from '@iconify/react';
import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardGroupStudent from './Card';
import TitleManager from '@/components/ui/Title';
import useTermStore from '@/store/termStore';
import {
  checkColorStatusPartTerm,
  ENUM_STATUS_OF_DATE_TERM,
} from '@/utils/validations/term.validation';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Header({ partOfTerm, term }) {
  const navigate = useNavigate();

  return (
    <Box bgcolor={'primary.dark'} pb={6} px='10px'>
      {/***Back */}
      <Box
        alignItems={'center'}
        onClick={() => navigate('/')}
        display={'flex'}
        height={30}
        color={'grey.500'}
        sx={{
          '&:hover': {
            color: 'primary.dark',
            transition: '0.3s ease-in',
          },
        }}
      >
        <Icon width={24} style={{ color: '#cfcbcb' }} icon='ion:chevron-back' /> Quay lại
      </Box>
      <Box pt={6} mb={3}>
        <TitleManager color={'grey.200'} fontSize={18} mb={4}>
          Đăng kí nhóm sinh viên - {term.name}
          <Typography
            mt={2}
            fontWeight={500}
            variant='body1'
            color={checkColorStatusPartTerm(partOfTerm?.ChooseGroup?.status)}
          >
            {partOfTerm.ChooseGroup?.mess}
          </Typography>
        </TitleManager>
      </Box>
      {partOfTerm.ChooseGroup?.status === ENUM_STATUS_OF_DATE_TERM.ACTIVE && (
        <Box alignItems={'center'} px={'10px'} display={'flex'} gap={4}>
          <Box py={4} display={'flex'} position={'relative'} alignItems={'center'} width={'100%'}>
            <TextField
              sx={{
                // bgcolor: 'white',
                width: '100%',
                borderColor: 'white',
                borderRadius: 10,
                '.MuiInputBase-root': {
                  pl: 12,
                  borderRadius: 10,
                  color: 'white',
                },
              }}
              size='small'
              placeholder='Tìm kiếm theo tên nhóm'
            />
            <Button
              sx={{
                borderRadius: 50,
                position: 'absolute',
                zIndex: 2,
                left: 0,
                minWidth: 20,
                color: 'white',
                cursor: 'pointer',
                p: 4,
              }}
            >
              <Icon width={20} icon='tabler:search' />
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
function GroupStudentMobile() {
  const { HandleGroupStudentByTerm } = useGroupStudent();
  const { data } = HandleGroupStudentByTerm();
  const { partOfTerm, term } = useTermStore();

  return (
    <Box>
      <Header term={term} partOfTerm={partOfTerm} />
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
              width: '300px',
              height: '300px',
            }}
            src='https://lottie.host/d5ee136a-961a-4bc7-bfa6-709dcb8e1038/WNAl4pFATV.json'
            loop
            autoplay
          />
          <Typography
            sx={{
              position: 'relative',
              top: -20,
            }}
            variant='h6'
            fontWeight={'500'}
            color='grey.600'
          >
            Đã hết hạn đăng kí Nhóm.
          </Typography>
        </Box>
      ) : (
        <Box
          px={'10px'}
          sx={{
            overflowY: 'auto',
            height: '90vh',
          }}
          mt={4}
        >
          {' '}
          {partOfTerm.ChooseGroup?.status === ENUM_STATUS_OF_DATE_TERM.INACTIVE ? (
            <>
              <Box
                height={'50vh'}
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
                  variant='h6'
                  color='grey.600'
                >
                  Sự kiện sắp diễn ra
                </Typography>
              </Box>
            </>
          ) : (
            <Box
              sx={{
                height: '100%',
              }}
            >
              {data?.groupStudents.map((gr) => (
                <CardGroupStudent numOfMembers={gr.numOfMembers} name={gr.name} groupId={gr.id} />
              ))}
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}

export default GroupStudentMobile;
