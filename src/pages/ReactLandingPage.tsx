// import React, { useState, useEffect } from 'react';
import { useParams, Outlet } from "react-router-dom";
import Topics from "./Topics";

// import { getReactTopics } from './api'; // Import your API function

function ReactLandingPage() {
  const { topicId } = useParams();
  // const [topics, setTopics] = useState([]);

  // useEffect(() => {
  //   const fetchTopics = async () => {
  //     // const data = await getReactTopics(); // Fetch React topics from API
  //     // setTopics(data);
  //   };
  //   fetchTopics();
  // }, []);
  return (
    <>
      <div className="h2-bold my-4">
        Select a <span className="primary-color">topic </span> to start with:
      </div>
      <div className="flex">
        <div className={`${topicId ? "hidden md:block" : ""} w-full md:w-1/3`}>
          <Topics basePath="react" />
        </div>
        <div className={`${topicId ? "" : "hidden md:block"}`}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default ReactLandingPage;
