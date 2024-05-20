// import { useState, useEffect } from 'react';
import { useParams, Outlet } from "react-router-dom";
import Topics from "../Topics";
// import { getJsTopics } from './api'; // Import your API function

function CourseLandingPage({ path }: { path: string }) {
  const { topicId } = useParams();
  // const [topics, setTopics] = useState([]);

  // useEffect(() => {
  //   const fetchTopics = async () => {
  //     // const data = await getJsTopics(); // Fetch JavaScript topics from API
  //     // setTopics(data);
  //   };
  //   fetchTopics();
  // }, []);
  // console.log("------ location: ", location);
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
