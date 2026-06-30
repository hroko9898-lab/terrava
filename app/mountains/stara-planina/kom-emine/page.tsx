import RouteDetailPage from "../../../components/RouteDetailPage";
import { routeDetails } from "../../../data/routeDetails";

const route = routeDetails["stara-planina/kom-emine"];

export const metadata = {
  title: route.metadataTitle,
  description: route.metadataDescription,
};

export default function KomEminePage() {
  return <RouteDetailPage {...route} />;
}
