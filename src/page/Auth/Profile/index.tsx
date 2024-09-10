import ProfileDesktop from '@/components/page/Auth/Profile/desktop';
import ProfileMobile from '@/components/page/Auth/Profile/mobile';
import { useMobile } from '@/hook/ui/useMobile';


function ProfilePage() {
  const { isMobile } = useMobile();
  const renderJSX = isMobile ? <ProfileMobile /> : <ProfileDesktop />;
  return renderJSX;
}

export default ProfilePage;
