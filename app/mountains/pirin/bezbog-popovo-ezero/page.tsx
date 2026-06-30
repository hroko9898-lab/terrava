import RouteDetailPage from "../../../components/RouteDetailPage";
import { routeDetails } from "../../../data/routeDetails";

const route = routeDetails["pirin/bezbog-popovo-ezero"];

export const metadata = {
  title: route.metadataTitle,
  description: route.metadataDescription,
};

export default function BezbogPopovoEzeroPage() {
  return <RouteDetailPage {...route} />;
}
