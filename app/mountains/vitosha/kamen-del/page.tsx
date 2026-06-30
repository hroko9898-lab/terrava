import RouteDetailPage from "../../../components/RouteDetailPage";
import { routeDetails } from "../../../data/routeDetails";

const route = routeDetails["vitosha/kamen-del"];

export const metadata = {
  title: route.metadataTitle,
  description: route.metadataDescription,
};

export default function KamenDelPage() {
  return <RouteDetailPage {...route} />;
}
