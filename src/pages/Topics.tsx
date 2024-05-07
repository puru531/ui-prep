import { useSelector } from "react-redux";
import Topic from "./Topic";

const Topics = () => {
  const topics = useSelector((state) => state.topics.topics);
  console.log("====== topics", topics);
  return topics?.length > 0 ? (
    <div>
      {topics.map((topic) => (
        <Topic key={topic.key} topic={topic} />
      ))}
    </div>
  ) : (
    <div></div>
  );
};

export default Topics;
