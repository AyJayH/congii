import { useParams } from "react-router-dom";
import PageRequest from "./PageRequest";

const PageRequestWrapper: React.FC = () => {
  const { pageId } = useParams<{ pageId: string }>();

  if (!pageId) return <div>Invalid page</div>;

  return <PageRequest page={pageId} />;
};

export default PageRequestWrapper;