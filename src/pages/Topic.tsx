import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiBookOpen } from "react-icons/hi2";

const Topic = ({ topic }) => {
  return (
    <div className="mx-3 mb-2 flex items-center justify-between rounded-lg bg-gray-200 py-2">
      <div className="mx-2">
        <HiBookOpen className="h3-bold" />
      </div>
      <div className="flex-1">{topic.name}</div>
      <div className="mx-2">
        <HiArrowCircleRight className="h3-bold" />
      </div>
    </div>
  );
};

export default Topic;
