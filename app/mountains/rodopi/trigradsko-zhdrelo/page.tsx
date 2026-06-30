import RouteDetailPage from "../../../components/RouteDetailPage";
import { routeDetails } from "../../../data/routeDetails";

const route = routeDetails["rodopi/trigradsko-zhdrelo"];

export const metadata = {
  title: route.metadataTitle,
  description: route.metadataDescription,
};

export default function TrigradskoZhdreloPage() {
  return <RouteDetailPage {...route} />;
}
