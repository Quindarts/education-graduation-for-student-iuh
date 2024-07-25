import { Box } from '@mui/material';
import React from 'react';
import NewFeedSection from './NewFeed';
import BannerSection from './Banner';
import InfoPropjectSection from './Info';
import MarqueeRunning from '../../components/ui/Marquee';

function HomeTemplate() {
  return (
    <Box>
      <Box>
        <BannerSection />
        <MarqueeRunning />

        <NewFeedSection />
        <InfoPropjectSection />
      </Box>
    </Box>
  );
}

export default HomeTemplate;
