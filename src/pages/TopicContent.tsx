import {
  useGetCurrentCourse,
  useGetTopicByTopicId,
  useGetTopicsContentById,
} from "@/services/query";
import { Questions } from "@/types/model";
import { ErrorPage, Loader } from "@/ui";
import { Link, useNavigate, useParams } from "react-router-dom";
import Content from "./Content";
import { HiArrowLeftCircle } from "react-icons/hi2";

function TopicContent() {
  const navigate = useNavigate();
  const { course, topicId } = useParams();

  const selectedCourse = useGetCurrentCourse(course || "");

  let {
    data: selectedTopic,
    isLoading: isTopicLoading,
    isError: isTopicError,
    error: isTopicFailed,
  } = useGetTopicByTopicId(topicId);
  selectedTopic = selectedTopic && [...selectedTopic]?.[0];

  const {
    data: topicContent,
    isLoading,
    isError,
  } = useGetTopicsContentById(topicId);

  if (isLoading || isTopicLoading) return <Loader />;

  if (!selectedCourse)
    return (
      <h2 className="sm:hidden">
        No topic found{" "}
        <Link to={"/"} className="text-blue-500">
          Explore Courses
        </Link>
      </h2>
    );
  if (selectedTopic && selectedTopic?.course_id !== selectedCourse?.id)
    return (
      <h2>
        The topic you are looking for has not found, please select another
        topic, or{" "}
        <Link to={"/"} className="text-blue-500">
          Explore Courses
        </Link>
      </h2>
    );

  if (!topicId)
    return (
      <div className="flex-1 content-center text-center align-middle">
        <h2>Kindly select any topic to get started</h2>
      </div>
    );

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
