import React from 'react';
import { useMobile } from '@/hook/ui/useMobile';
import TopicMobile from '@/components/page/Topic/mobile';
import TopicDesktop from '@/components/page/Topic/desktop';

function TopicTemplate() {
  const { isMobile } = useMobile();
  return isMobile ? <TopicMobile /> : <TopicDesktop />;
}

export default TopicTemplate;
