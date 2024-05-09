/* eslint-disable @typescript-eslint/no-unused-vars */
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

// import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
// import { getTopicById } from './api'; // Import your API function

function TopicContent() {
  const { topicId } = useParams();
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
    content: "Fundamental content",
  };

  if (topicId) {
    return (
      <div>
        <h1>Topic Detail --- {topicId}</h1>
        {topic ? (
          <div>
            <button
              className="md:hidden"
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              Back to Topics
            </button>
            <h2>{topic.title}</h2>
            <p>{topic.content}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
  return (
    <div className="flex-1 content-center text-center align-middle">
      <h2>Kindly select any topic to get started</h2>
    </div>
  );
}

export default TopicContent;
