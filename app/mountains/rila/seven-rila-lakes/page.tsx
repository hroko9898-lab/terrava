import RouteDetailPage from "../../../components/RouteDetailPage";
import { routeDetails } from "../../../data/routeDetails";

const route = routeDetails["rila/seven-rila-lakes"];

export const metadata = {
  title: route.metadataTitle,
  description: route.metadataDescription,
};

export default function SevenRilaLakesPage() {
  return <RouteDetailPage {...route} />;
}
