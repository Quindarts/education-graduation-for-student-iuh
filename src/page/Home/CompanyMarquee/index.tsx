import { Box } from '@mui/material';
import Marquee from 'react-fast-marquee';

function CompanyMarquee() {
  return (
    <Box sx={{ py: 0, textTransform: 'uppercase' }} className='running'>
      <Marquee
        pauseOnHover
        speed={70}
        style={{ backgroundColor: 'white', height: 90, overflowY: 'hidden' }}
        gradientColor='white'
      >
        <Box
          className='running__text'
          alignItems={'center'}
          display={'flex'}
          mx={50}
          width={200}
          height={90}
        >
          <img width={'100%'} style={{ objectFit: 'cover' }} src='/images/kms.webp' />
        </Box>
        <Box
          className='running__text'
          alignItems={'center'}
          display={'flex'}
          mx={50}
          width={200}
          height={90}
        >
          <img width={'100%'} style={{ objectFit: 'cover' }} src='/images/gameloft.webp' />
        </Box>
        <Box
          className='running__text'
          alignItems={'center'}
          display={'flex'}
          mx={50}
          width={200}
          height={90}
        >
          <img width={'100%'} style={{ objectFit: 'cover' }} src='/images/global.webp' />
        </Box>
        <Box
          className='running__text'
          alignItems={'center'}
          display={'flex'}
          mx={50}
          width={200}
          height={90}
        >
          <img width={'100%'} style={{ objectFit: 'cover' }} src='/images/DXC.webp' />
        </Box>
        <Box
          className='running__text'
          alignItems={'center'}
          display={'flex'}
          mx={50}
          width={200}
          height={90}
        >
          <img width={'100%'} style={{ objectFit: 'cover' }} src='/images/FPT_Software_logo.webp' />
        </Box>
      </Marquee>
    </Box>
  );
}

export default CompanyMarquee;
