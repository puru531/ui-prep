// import { RootState } from "@/types/model";
// import { useSelector } from "react-redux";


// const TopicContent = () => {
//   const currentTopic = useSelector((state: RootState) => state.topics.currentTopic);
//   console.log("====== currentTopic", currentTopic);
//   return (
//     <div>TopicContent</div>
//   )
// }

// export default TopicContent













// TopicDetail.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { getTopicById } from './api'; // Import your API function

function TopicContent({ onBack }) {
  // const { topicId } = useParams();
  const navigate = useNavigate();
  // const [topic, setTopic] = useState(null);

  // useEffect(() => {
  //   const fetchTopic = async () => {
  //     // const data = await getTopicById(topicId); // Fetch topic details from API
  //     // setTopic(data);
  //   };
  //   fetchTopic();
  // }, [topicId]);

  const topic = {
    title: "Fundamental",
    content: "Fundamental content"
  }

  return (
    <div>
      <h1>Topic Detail</h1>
      {topic ? (
        <div>
          <h2>{topic.title}</h2>
          <p>{topic.content}</p>
          <button onClick={() => navigate(-1)}>Back to Topics</button>
          <button onClick={onBack}>Back to Topics</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default TopicContent;
