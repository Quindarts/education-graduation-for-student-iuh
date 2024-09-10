import GroupStudentDesktop from "@/components/page/GroupStudent/desktop";
import GroupStudentMobile from "@/components/page/GroupStudent/mobile";
import { useMobile } from "@/hook/ui/useMobile";

function GroupStudentTemplate() {
  const { isMobile } = useMobile();
  const renderJSX = isMobile ? <GroupStudentMobile /> : <GroupStudentDesktop />;
  return renderJSX;
}

export default GroupStudentTemplate;
