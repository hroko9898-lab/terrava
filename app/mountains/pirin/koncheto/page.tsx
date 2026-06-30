import RouteDetailPage from "../../../components/RouteDetailPage";
import { routeDetails } from "../../../data/routeDetails";

const route = routeDetails["pirin/koncheto"];

export const metadata = {
  title: route.metadataTitle,
  description: route.metadataDescription,
};

export default function KonchetoPage() {
  return <RouteDetailPage {...route} />;
}
