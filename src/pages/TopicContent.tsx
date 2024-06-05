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
import {
  useGetTopicByTopicId,
  useGetTopicsContentById,
} from "@/services/query";
import { Questions } from "@/types/model";
import { ErrorPage, Loader } from "@/ui";
import { useNavigate, useParams } from "react-router-dom";
import Content from "./Content";
import { HiArrowLeftCircle } from "react-icons/hi2";

function TopicContent() {
  const { topicId } = useParams();

  const navigate = useNavigate();

  const {
    data: topicContent,
    isLoading,
    isError,
    error,
  } = useGetTopicsContentById(topicId);

  let {
    data: selectedTopic,
    isLoading: isTopicLoading,
    isError: isTopicError,
    error: isTopicFailed,
  } = useGetTopicByTopicId(topicId);
  selectedTopic = selectedTopic && [...selectedTopic]?.[0];

  if (!topicId)
    return (
      <div className="flex-1 content-center text-center align-middle">
        <h2>Kindly select any topic to get started</h2>
      </div>
    );

  if (isLoading) return <Loader />;
  if (isError) return <ErrorPage />;

  return (
    <div>
      {topicContent && (
        <div>
          <div className="mb-2 flex">
            <button
              className="btn-secondary mr-2 flex items-center md:hidden"
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              <HiArrowLeftCircle className="mr-1 text-lg" />
              Back
            </button>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {selectedTopic?.name}
            </h1>
          </div>

          {topicContent.map((item: Questions) => (
            <Content item={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TopicContent;
