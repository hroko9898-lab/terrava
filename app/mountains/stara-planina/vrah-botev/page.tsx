import RouteDetailPage from "../../../components/RouteDetailPage";
import { routeDetails } from "../../../data/routeDetails";

const route = routeDetails["stara-planina/vrah-botev"];

export const metadata = {
  title: route.metadataTitle,
  description: route.metadataDescription,
};

export default function VrahBotevPage() {
  return <RouteDetailPage {...route} />;
}
