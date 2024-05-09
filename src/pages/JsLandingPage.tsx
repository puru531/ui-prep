// import { useState, useEffect } from 'react';
import { Link, Route, useMatch, useParams, useNavigate } from 'react-router-dom';
// import { getJsTopics } from './api'; // Import your API function
import { TopicContent } from '.';
import Topics from './Topics';

function JsLandingPage() {
  const match = useMatch();
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
      <div className="flex">
        <Topics />
      </div>
      <Route path={`${match.path}/topic/:${topicId}`}>
        <TopicContent onBack={() => navigate(-1)} />
      </Route>
    </>

   


  );
}

export default JsLandingPage;
