import DropDown from '@/components/ui/Dropdown';
import { Box, TextField } from '@mui/material';
import React from 'react';
import useParams from '@/hook/ui/useParams';

const SEARCH_DROP_VALUE = [
  {
    name: 'Tên Đề tài',
    _id: 'name',
  },
];
function HeaderTopic() {
  const { onSearchChange, getQueryField, onTypeSearchChange } = useParams();
  return (
    <>
      <Box display={'flex'} flexWrap={'wrap'} gap={2}>
        <Box flex={1} display={'flex'} gap={2} width={'full'}>
          <Box width={150}>
            <DropDown
              placeholder='Tìm kiếm đề tài'
              value={'name'}
              onChange={(e: any) => onTypeSearchChange(`${e.target.value}`)}
              options={SEARCH_DROP_VALUE}
            />
          </Box>
          <TextField
            fullWidth
            size='small'
            defaultValue={getQueryField('keywords')}
            onChange={onSearchChange}
            placeholder='Tim kiếm đề tài..'
          />
        </Box>
      </Box>
    </>
  );
}

export default React.memo(HeaderTopic);
