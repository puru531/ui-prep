import { useDispatch } from "react-redux";
import { CourseTopic } from "@/types/model";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiBookOpen } from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";
import { setCurrentTopic } from "../reducers/topicsSlice";
import { useGetAllTopics, useGetCurrentCourse } from "@/services/query";
import { ErrorPage, Loader } from "@/ui";

const Topics = () => {
  const dispatch = useDispatch();
  const { course } = useParams();
  const selectedCourse = useGetCurrentCourse(course || "");
  console.log("selectedCourse", selectedCourse);

  const { allTopics, isLoading, isError } = useGetAllTopics();
  if (isLoading) return <Loader />;
  if (isError) return <ErrorPage />;

  const topics = allTopics?.filter(
    (topic) => topic.course_id === selectedCourse?.id,
  );

  if (!selectedCourse)
    return (
      <div>
        No course found,{" "}
        <Link to="/" className="text-blue-500">
          Explore courses
        </Link>
      </div>
    );

  function handleLinkClick(topic: CourseTopic) {
    dispatch(setCurrentTopic(topic));
  }

  return topics?.length > 0 ? (
    <div className="w-full">
      {topics.map((topic: CourseTopic) => (
        <Link
          key={topic.id}
          to={`/${course}/${topic.id}`}
          onClick={() => handleLinkClick(topic)}
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
    <div>
      No topic found for {selectedCourse.name},{" "}
      <Link to="/" className="text-blue-500">
        Explore other courses
      </Link>
    </div>
  );
};

export default Topics;
