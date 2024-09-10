import { useMobile } from '@/hook/ui/useMobile';
import DashBoardDesktop from '@/components/page/Dashboard/desktop';
import DashBoardMobile from '@/components/page/Dashboard/mobile';

function DashboardTemplate() {
  const { isMobile } = useMobile();
  const renderJSX = !isMobile ? <DashBoardDesktop /> : <DashBoardMobile />;
  return renderJSX;
}

export default DashboardTemplate;
