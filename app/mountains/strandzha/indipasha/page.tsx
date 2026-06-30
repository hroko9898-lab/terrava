import RouteDetailPage from "../../../components/RouteDetailPage";
import { routeDetails } from "../../../data/routeDetails";

const route = routeDetails["strandzha/indipasha"];

export const metadata = {
  title: route.metadataTitle,
  description: route.metadataDescription,
};

export default function IndipashaPage() {
  return <RouteDetailPage {...route} />;
}
