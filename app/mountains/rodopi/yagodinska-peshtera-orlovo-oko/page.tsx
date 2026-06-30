import RouteDetailPage from "../../../components/RouteDetailPage";
import { routeDetails } from "../../../data/routeDetails";

const route = routeDetails["rodopi/yagodinska-peshtera-orlovo-oko"];

export const metadata = {
  title: route.metadataTitle,
  description: route.metadataDescription,
};

export default function YagodinskaPeshteraOrlovoOkoPage() {
  return <RouteDetailPage {...route} />;
}
