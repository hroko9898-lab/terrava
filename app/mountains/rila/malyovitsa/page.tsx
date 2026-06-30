import RouteDetailPage from "../../../components/RouteDetailPage";
import { routeDetails } from "../../../data/routeDetails";

const route = routeDetails["rila/malyovitsa"];

export const metadata = {
  title: route.metadataTitle,
  description: route.metadataDescription,
};

export default function MalyovitsaPage() {
  return <RouteDetailPage {...route} />;
}
