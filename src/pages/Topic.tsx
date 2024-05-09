import { HiArrowCircleRight } from "react-icons/hi";
import { HiBookOpen } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import {  setCurrentTopic } from "../reducers/topicsSlice";

interface TopicProps {
  topic: {
    id: number;
    name: string;
  };
}

const Topic = ({ topic }: TopicProps) => {
  const navigate = useNavigate();
  // const location = useLocation();
  const dispatch = useDispatch();


  function handleTopicClick() {
    navigate(`topic/${topic?.id}`);
    dispatch(setCurrentTopic(topic));
  }

  return (
    <div className="mx-3 mb-2 flex items-center justify-between rounded-lg bg-gray-200 text-gray-900 py-2" onClick={handleTopicClick}>
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
