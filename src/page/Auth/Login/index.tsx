import LoginDesktop from '@/components/page/Auth/Login/desktop';
import LoginMobile from '@/components/page/Auth/Login/mobile';
import { useMobile } from '@/hook/ui/useMobile';

function LoginPage() {
  const { isMobile } = useMobile();
  const returnJSX = !isMobile ? <LoginDesktop /> : <LoginMobile />;
  return returnJSX;
}

export default LoginPage;
