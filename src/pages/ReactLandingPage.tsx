// import React, { useState, useEffect } from 'react';
import {
  // Link,
  Route,
  useParams,
  useNavigate,
  Routes,
} from "react-router-dom";

// import { getReactTopics } from './api'; // Import your API function
import { TopicContent } from ".";
import Topics from "./Topics";

function ReactLandingPage() {
  const { topicId } = useParams();
  const navigate = useNavigate();
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
      <div className="flex w-full md:w-1/3">
        <Topics basePath="/react" />
      </div>
      <Routes>
        <Route
          path="/react/topic/:topicId"
          element={<TopicContent onBack={() => navigate(-1)} />}
        ></Route>
      </Routes>
    </>
  );
}

export default ReactLandingPage;
