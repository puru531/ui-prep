import { RootState } from "@/types/model";
import { useSelector } from "react-redux";


const TopicContent = () => {
  const currentTopic = useSelector((state: RootState) => state.topics.currentTopic);
  console.log("====== currentTopic", currentTopic);
  return (
    <div>TopicContent</div>
  )
}

export default TopicContent