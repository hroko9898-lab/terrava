import RouteDetailPage from "../../../components/RouteDetailPage";
import { routeDetails } from "../../../data/routeDetails";

const route = routeDetails["strandzha/brashlyan"];

export const metadata = {
  title: route.metadataTitle,
  description: route.metadataDescription,
};

export default function BrashlyanPage() {
  return <RouteDetailPage {...route} />;
}
