import { useGetJsTopics } from "@/services/query";
import CourseLandingPage from "./CourseLandingPage";
import Loader from "@/ui/Loader";
import ErrorPage from "@/ui/ErrorPage";

function JsLandingPage() {
  const { topics, isLoading, isError, error } = useGetJsTopics();
  console.log({ topics, isLoading: isLoading, isError: isError, error });

  if (isLoading) return <Loader />;
  if (isError) return <ErrorPage />;

  return <CourseLandingPage path="js" />;
}

export default JsLandingPage;
