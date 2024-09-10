import { useMobile } from '@/hook/ui/useMobile';
import MyGroupStudentMobile from '@/components/page/MyGroupStudent/mobile';
import MyGroupStudentDesktop from '@/components/page/MyGroupStudent/desktop';

function MyGroupStudentPage() {
  const { isMobile } = useMobile();
  const RenderJSX = isMobile ? <MyGroupStudentMobile /> : <MyGroupStudentDesktop />;
  return RenderJSX;
}

export default MyGroupStudentPage;
