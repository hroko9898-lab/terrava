import RouteDetailPage from "../../../components/RouteDetailPage";
import { routeDetails } from "../../../data/routeDetails";

const route = routeDetails["strandzha/mishkova-niva-golyamo-gradishte"];

export const metadata = {
  title: route.metadataTitle,
  description: route.metadataDescription,
};

export default function MishkovaNivaGolyamoGradishtePage() {
  return <RouteDetailPage {...route} />;
}
