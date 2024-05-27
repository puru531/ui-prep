import { useGetJsTopics } from "@/services/query";
import CourseLandingPage from "./CourseLandingPage";
import Loader from "@/ui/Loader";
import ErrorPage from "@/ui/ErrorPage";
import { useDispatch } from "react-redux";
import { setJsTopics } from "../../reducers/topicsSlice";

function JsLandingPage() {
  const { topics, isLoading, isError, error } = useGetJsTopics();
  const dispatch = useDispatch();
  if (topics?.length > 0) {
    dispatch(setJsTopics(topics));
  }
  console.log({ isLoading, isError, error });
  if (isLoading) return <Loader />;
  if (isError) return <ErrorPage />;

  return <CourseLandingPage path="js" />;
}

export default JsLandingPage;
