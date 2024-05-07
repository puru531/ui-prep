import { useSelector } from "react-redux";
import Topic from "./Topic";
import { CourseTopic, RootState } from "@/types/model";

const Topics = () => {
  const topics = useSelector((state: RootState) => state.topics.allTopics);
  console.log("====== topics", topics);
  return topics?.length > 0 ? (
    <div>
      {topics.map((topic: CourseTopic) => (
        <Topic key={topic.id} topic={topic} />
      ))}
    </div>
  ) : (
    <div>No topic found</div>
  );
};

export default Topics;
