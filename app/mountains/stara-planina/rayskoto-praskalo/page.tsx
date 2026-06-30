import RouteDetailPage from "../../../components/RouteDetailPage";
import { routeDetails } from "../../../data/routeDetails";

const route = routeDetails["stara-planina/rayskoto-praskalo"];

export const metadata = {
  title: route.metadataTitle,
  description: route.metadataDescription,
};

export default function RayskotoPraskaloPage() {
  return <RouteDetailPage {...route} />;
}
