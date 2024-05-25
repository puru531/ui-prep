import Loader from "@/ui/Loader";
import CourseLandingPage from "./CourseLandingPage";
import ErrorPage from "@/ui/ErrorPage";
import { useGetReactTopics } from "@/services/query";

function ReactLandingPage() {
  const { topics, isLoading, isError, error } = useGetReactTopics();
  console.log({ topics, isLoading: isLoading, isError: isError, error });

  if (isLoading) return <Loader />;
  if (isError) return <ErrorPage />;
  return <CourseLandingPage path="react" />;
}

export default ReactLandingPage;
