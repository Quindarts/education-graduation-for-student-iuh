import React from 'react';
import { useMobile } from '@/hook/ui/useMobile';
import ScorePageMobile from '@/components/page/ScoreManagement/mobile';
import ScorePageDesktop from '@/components/page/ScoreManagement/desktop';

function ScoreManagementTemplate() {
  const { isMobile } = useMobile();
  const renderJSX = isMobile ? <ScorePageMobile /> : <ScorePageDesktop />;
  return renderJSX;
}

export default ScoreManagementTemplate;
