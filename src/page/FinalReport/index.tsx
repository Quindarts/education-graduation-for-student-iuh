import FinalReportDesktop from '@/components/page/FinalReport/desktop';
import { useMobile } from '@/hook/ui/useMobile';
import React from 'react';

function FinalReport() {
  const { isMobile } = useMobile();

  return <FinalReportDesktop />;
}

export default FinalReport;
