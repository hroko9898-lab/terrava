import RouteDetailPage from "../../../components/RouteDetailPage";
import { routeDetails } from "../../../data/routeDetails";

const route = routeDetails["rila/musala"];

export const metadata = {
  title: route.metadataTitle,
  description: route.metadataDescription,
};

export default function MusalaPage() {
  return <RouteDetailPage {...route} />;
}
