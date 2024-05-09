import { useSelector } from "react-redux";
import Topic from "./Topic";
import { CourseTopic, RootState } from "@/types/model";

const Topics = () => {
  const topics = useSelector((state: RootState) => state.topics.allTopics);
  console.log("====== topics", topics);
  return topics?.length > 0 ? (
    <div className="w-full md:w-1/3">
      {topics.map((topic: CourseTopic) => (
        <Topic key={topic.id} topic={topic} />
      ))}
    </div>
  ) : (
    <div>No topic found</div>
  );
};

export default Topics;



// <div className="topics-container">
// <ul>
//   {topics.map(topic => (
//     <li key={topic.id}>
//       <Link to={`${match.url}/topic/${topic.id}`}>{topic.title}</Link>
//     </li>
//   ))}
// </ul>
// </div>