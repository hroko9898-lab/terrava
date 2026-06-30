import RouteDetailPage from "../../../components/RouteDetailPage";
import { routeDetails } from "../../../data/routeDetails";

const route = routeDetails["vitosha/cherni-vrah"];

export const metadata = {
  title: route.metadataTitle,
  description: route.metadataDescription,
};

export default function CherniVrahPage() {
  return <RouteDetailPage {...route} />;
}
