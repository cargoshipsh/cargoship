import { ContentWrapper } from "@/components/layout/ContentWrapper";
import ApisPage from "components/apis/ApisPage";
import LayoutApp from "components/layout/LayoutApp";

export default function ApiOverviewPage({}) {
  return (
    <LayoutApp>
      <ContentWrapper>
        <ApisPage />
      </ContentWrapper>
    </LayoutApp>
  );
}
