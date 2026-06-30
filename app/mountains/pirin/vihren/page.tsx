import RouteDetailPage from "../../../components/RouteDetailPage";
import { routeDetails } from "../../../data/routeDetails";

const route = routeDetails["pirin/vihren"];

export const metadata = {
  title: route.metadataTitle,
  description: route.metadataDescription,
};

export default function VihrenPage() {
  return <RouteDetailPage {...route} />;
}
