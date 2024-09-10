import TopicDetailDesktop from '@/components/page/TopicDetail/desktop';
import TopicDetailMobile from '@/components/page/TopicDetail/mobile';
import { useMobile } from '@/hook/ui/useMobile';

function TopicDetailPage() {
  const { isMobile } = useMobile();
  return isMobile ? <TopicDetailMobile /> : <TopicDetailDesktop />;
}

export default TopicDetailPage;
