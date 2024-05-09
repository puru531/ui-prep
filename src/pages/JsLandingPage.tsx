// import { useState, useEffect } from 'react';
import {
  // Link,
  Route,
  useParams,
  useNavigate,
  Routes,
  Outlet,
} from "react-router-dom";
// import { getJsTopics } from './api'; // Import your API function
import { TopicContent } from ".";
import Topics from "./Topics";

function JsLandingPage() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  // const [topics, setTopics] = useState([]);

  // useEffect(() => {
  //   const fetchTopics = async () => {
  //     // const data = await getJsTopics(); // Fetch JavaScript topics from API
  //     // setTopics(data);
  //   };
  //   fetchTopics();
  // }, []);

  return (
    <>
      <div className="h2-bold my-4">
        Select a <span className="text-yellow-500">topic </span> to start with:
      </div>
      <div className="flex w-full md:w-1/3">
        <Topics basePath="/js" />
      </div>
      <Routes>
        <Route
          path="/js/topic/:topicId"
          element={<TopicContent onBack={() => navigate(-1)} />}
        ></Route>
      </Routes>
    </>
  );
}

export default JsLandingPage;
