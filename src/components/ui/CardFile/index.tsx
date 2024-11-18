import { Icon } from '@iconify/react';
import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import ProgressFile from '../Loading/ProgressFile';

interface CardFileProps {
  fileName: string;
  totalSize: string;
  valueLoading: number;
}
{
  /* <Icon icon="vscode-icons:file-type-pdf2" /> */
}
{
  /* <Icon icon="grommet-icons:document-zip"  style={{color: #ee8711}} /> */
}
const CardFile: React.FC<CardFileProps> = ({ fileName, totalSize, valueLoading }) => {
  return (
    <Card sx={{ p: 6, borderRadius: 2 }} elevation={2}>
      <Box gap={2} alignItems={'center'} display={'flex'}>
        <Icon width={40} icon='vscode-icons:file-type-pdf2' color='rgb(0,82,177,0.8)' />
        <Box>
          <Typography variant='body2'>
            Tên file:{' '}
            <Typography component='span' variant='body2' color='grey.800'>
              {fileName ? fileName : 'Chưa có tên file'}
            </Typography>
          </Typography>
          <Typography variant='body2'>
            Kích thước:{' '}
            <Typography component='span' variant='body2' color='grey.800'>
              {totalSize ? totalSize : '0 KB'}
            </Typography>
          </Typography>
        </Box>
      </Box>
      <ProgressFile value={valueLoading ? valueLoading * 100 : 0} />
      {valueLoading === 1 && (
        <Typography textAlign={'end'} variant='body2' fontWeight={700} color='success.main'>
          Lưu thành công
          <Icon icon='mdi:tick-outline' width={18} />
        </Typography>
      )}
    </Card>
  );
};

export default CardFile;
