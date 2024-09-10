import MyTopicDesktop from '@/components/page/MyTopic/desktop';
import MyTopicMobile from '@/components/page/MyTopic/mobile';
import { useMobile } from '@/hook/ui/useMobile';

function MyTopicPage() {
  const { isMobile } = useMobile();
  const renderJSX = isMobile ? <MyTopicMobile /> : <MyTopicDesktop />;
  return renderJSX;
}

export default MyTopicPage;
