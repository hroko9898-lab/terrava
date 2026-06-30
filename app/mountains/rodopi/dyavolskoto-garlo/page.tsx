import RouteDetailPage from "../../../components/RouteDetailPage";
import { routeDetails } from "../../../data/routeDetails";

const route = routeDetails["rodopi/dyavolskoto-garlo"];

export const metadata = {
  title: route.metadataTitle,
  description: route.metadataDescription,
};

export default function DyavolskotoGarloPage() {
  return <RouteDetailPage {...route} />;
}
