import MyGroupLecturerDesktop from '@/components/page/MyGroupLecturer/desktop';
import MyGroupLecturerMobile from '@/components/page/MyGroupLecturer/mobile';
import { useMobile } from '@/hook/ui/useMobile';

function MyGroupLecturerPage() {
  const { isMobile } = useMobile();
  const RenderJSX = isMobile ? <MyGroupLecturerMobile /> : <MyGroupLecturerDesktop />;
  return RenderJSX;
}

export default MyGroupLecturerPage;
