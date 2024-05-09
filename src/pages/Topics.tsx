import { useSelector } from "react-redux";
// import Topic from "./Topic";
import { CourseTopic, RootState } from "@/types/model";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiBookOpen } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Topics = ({ basePath }: { basePath: string }) => {
  const topics = useSelector((state: RootState) => state.topics.allTopics);
  console.log("====== topics", topics);
  return topics?.length > 0 ? (
    <div className="w-full">
      {topics.map((topic: CourseTopic) => (
        // <Topic key={topic.id} topic={topic} />
        <Link
          key={topic.id}
          to={`${basePath}/${topic.id}`}
          className="mx-3 mb-2 flex items-center justify-between rounded-lg bg-gray-200 py-2 text-gray-900"
        >
          <div className="mx-2">
            <HiBookOpen className="h3-bold" />
          </div>
          <div className="flex-1">{topic.name}</div>
          <div className="mx-2">
            <HiArrowCircleRight className="h3-bold" />
          </div>
        </Link>
      ))}
    </div>
  ) : (
    <div>No topic found</div>
  );
};

export default Topics;
