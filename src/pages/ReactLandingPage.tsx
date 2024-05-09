// import React, { useState, useEffect } from 'react';
import { Link, Route, useMatch, useParams, useNavigate } from 'react-router-dom';

// import { getReactTopics } from './api'; // Import your API function
import { TopicContent } from '.';

function ReactLandingPage() {
  const match = useMatch();
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

      <Route path={`${match.path}/topic/:${topicId}`}>
        <TopicContent onBack={() => navigate(-1)} />
      </Route>
 
  </>

  );
}

export default ReactLandingPage;
