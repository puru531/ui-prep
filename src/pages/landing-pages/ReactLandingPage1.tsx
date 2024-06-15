import Loader from "@/ui/Loader";
import CourseLandingPage from "./CourseLandingPage";
import ErrorPage from "@/ui/ErrorPage";
import { useGetReactTopics } from "@/services/query";
import { useDispatch } from "react-redux";
import { setReactTopics } from "../../reducers/topicsSlice";

function ReactLandingPage() {
  const { topics, isLoading, isError, error } = useGetReactTopics();
  const dispatch = useDispatch();
  if (topics?.length > 0) {
    dispatch(setReactTopics(topics));
  }

  if (isLoading) return <Loader />;
  if (isError) return <ErrorPage />;
  return <CourseLandingPage path="react" />;
}

export default ReactLandingPage;
