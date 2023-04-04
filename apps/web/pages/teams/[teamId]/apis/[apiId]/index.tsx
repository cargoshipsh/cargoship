import { ContentWrapper } from "@/components/layout/ContentWrapper";
import ApiDetailPage from "@/components/apis/ApiDetailPage";
import LayoutApp from "@/components/layout/LayoutApp";

export default function SingleApiPage({}) {
  return (
    <LayoutApp>
      <ContentWrapper>
        <ApiDetailPage />
      </ContentWrapper>
    </LayoutApp>
  );
}
