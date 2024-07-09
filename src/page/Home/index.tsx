import { Box } from '@mui/material';
import React from 'react';
import NewFeedSection from './NewFeed';
import BannerSection from './Banner';
import InfoPropjectSection from './Info';

function HomeTemplate() {
  return (
    <Box>
      <Box>
        <BannerSection />
        <NewFeedSection />
        <InfoPropjectSection />
      </Box>
    </Box>
  );
}

export default HomeTemplate;
