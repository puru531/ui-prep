import Content from "@/pages/Content";
import { useEffect, useState } from "react";
import { AddNewCourse } from "./AddNewCourse";
import { AddNewTopic } from "./AddNewTopic";
import { useGetAllCourses, useGetAllTopics } from "@/services/query";
import { ErrorPage, Loader } from "@/ui";

export const AddQuestion = ({ onCancel }) => {
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const [selectedTopicId, setSelectedTopicId] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const {
    courses,
    isLoading: coursesLoading,
    isError: isCoursesError,
  } = useGetAllCourses();
  const {
    allTopics,
    isLoading: topicsLoading,
    isError: isTopicsError,
  } = useGetAllTopics();

  if (coursesLoading || topicsLoading) return <Loader />;

  if (isCoursesError || isTopicsError) return <ErrorPage />;

  const topics = allTopics?.filter(
    (topic) => topic.course_id === Number(selectedCourseId),
  );
  useEffect(() => {
    if(courses.length) {
      setSelectedCourseId(courses[0]?.id)
    }
  }, []);

  return (
    <div>
      <div>
        <h1 className="h3-bold">Add Question</h1>
        <form action="">
          <div className="flex">
            <div className="mb-2">
              <label htmlFor="course">Select course : </label>
              <select
                className="bg-blue-200 p-2"
                name="course"
                id="course-selector"
                required
                onChange={(e) => setSelectedCourseId(e.target.value)}
              >
                {courses?.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.name}
                  </option>
                ))}
              </select>
            </div>
            <AddNewCourse />
          </div>

          <div className="flex">
            <div>
              <label htmlFor="course">Select topic : </label>
              <select
                className="bg-blue-200 p-2"
                name="course"
                id="course-selector"
                required
                onChange={(e) => setSelectedTopicId(e.target.value)}
              >
                <option value="null">Select...</option>
                {topics?.map((topic) => (
                  <option key={topic.id} value={topic.id}>
                    {topic.name}
                  </option>
                ))}
              </select>
            </div>
            <AddNewTopic />
          </div>

          <div>
            <label htmlFor="question" className="">
              Question
            </label>
            <input
              name="question"
              type="text"
              required
              className="input-box"
              placeholder="Type your question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="answer" className="">
              Answer
            </label>
            <textarea
              name="answer"
              required
              className="input-box"
              placeholder="Type answer for above question..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>

          <div className="mt-4 flex justify-end px-2">
            <button type="button" className="btn-secondary" onClick={onCancel}>
              Cancel
            </button>

            <button
              type="submit"
              className="btn-primary"
              onClick={() =>
                console.log("======= payload : ", {
                  topic_id: Number(selectedTopicId),
                  question,
                  answer,
                })
              }
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div>
        <Content item={{ question, answer }} />
      </div>
    </div>
  );
};
