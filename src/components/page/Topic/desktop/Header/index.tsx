import DropDown from '@/components/ui/Dropdown';
import { Box, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useParams from '@/hook/ui/useParams';
import SplitButton from '@/components/ui/SplitButton';

const SEARCH_DROP_VALUE = [
  {
    name: 'Tên Đề tài',
    _id: 'name',
  },
  {
    name: 'Tên Giảng viên HD',
    _id: 'lecturerName',
  },
];
function HeaderTopic() {
  const { onSearchChange, getQueryField, onTypeSearchChange, setTypeSort } = useParams();
  const [sort, setSort] = useState('ASC');

  const optionSort = ['Tăng dần', 'Giảm dần'];
  const handleClick = (index: number) => {
    if (index === 0) setSort('ASC');
    else if (index === 1) setSort('DESC');
  };
  useEffect(() => {
    setTypeSort(sort);
  }, [sort]);
  return (
    <>
      <Box display={'flex'} flexWrap={'wrap'} gap={2}>
        <Box flex={1} display={'flex'} gap={2} width={''}>
          <Box width={180}>
            <DropDown
              placeholder='Tìm kiếm đề tài'
              value={getQueryField('searchField') ? getQueryField('searchField') : 'name'}
              onChange={(e: any) => onTypeSearchChange(`${e.target.value}`)}
              options={SEARCH_DROP_VALUE}
            />
          </Box>

          <TextField
            fullWidth
            size='small'
            defaultValue={getQueryField('keywords')}
            onChange={onSearchChange}
            placeholder='Tim kiếm đề tài theo tên đề tài, tên giảng viên'
          />
        </Box>{' '}
        <Box>
          <SplitButton
            icon='flowbite:sort-outline'
            options={optionSort}
            handleClick={handleClick}
          />
        </Box>
      </Box>
    </>
  );
}

export default React.memo(HeaderTopic);
