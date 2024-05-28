import { useParams, Outlet } from "react-router-dom";
import Topics from "../Topics";

function CourseLandingPage({ path }: { path: string }) {
  const { topicId } = useParams();
  return (
    <>
      <div className="h2-bold my-4">
        Select a <span className="text-yellow-500">topic </span> to start with:
      </div>
      <div className="flex">
        <div className={`${topicId ? "hidden md:block" : ""} w-full md:w-1/3`}>
          <Topics basePath={path} />
        </div>
        <div className={`${topicId ? "" : "hidden md:block"}`}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default CourseLandingPage;
