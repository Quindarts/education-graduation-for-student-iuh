import { Box, Button, Typography } from '@mui/material';

function CallToAction() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px 20px',
        backgroundColor: '#0052b1',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <Typography variant='h4' gutterBottom>
        Hãy trải nghiệm ngay
      </Typography>
      <Button variant='contained' color='secondary' size='large' sx={{ marginTop: '20px' }}>
        Dùng thử phần mềm
      </Button>
    </Box>
  );
}

export default CallToAction;
