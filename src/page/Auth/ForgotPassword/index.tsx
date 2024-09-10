import ForgotPasswordDesktop from '@/components/page/Auth/Forgot/desktop';
import ForgotPasswordMobile from '@/components/page/Auth/Forgot/mobile';
import { useMobile } from '@/hook/ui/useMobile';

function ForgotPassword() {
  const { isMobile } = useMobile();
  const returnJSX = !isMobile ? <ForgotPasswordDesktop /> : <ForgotPasswordMobile />;
  return returnJSX;
}

export default ForgotPassword;
