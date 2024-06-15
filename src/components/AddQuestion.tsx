import Content from "@/pages/Content";
import { useState } from "react";
import { HiMiniPlusCircle } from "react-icons/hi2";

export const AddQuestion = () => {
  const [showForm, setShowForm] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  return (
    <div>
      {!showForm && (
        <button
          className="btn-primary mb-2 w-full sm:w-[25rem]"
          onClick={() => setShowForm(true)}
        >
          <HiMiniPlusCircle className="h3-bold mr-1" />
          Add a new question
        </button>
      )}

      {showForm && (
        <>
          <div>
            <h1 className="h3-bold">Add Question</h1>
            <form action="">
              <div className="mb-2">
                <label htmlFor="course">Select course : </label>
                <select
                  className="bg-blue-200 p-2"
                  name="course"
                  id="course-selector"
                  required
                >
                  <option value="js">JavaScript</option>
                  <option value="react">ReactJS</option>
                </select>
              </div>
              <div>
                <label htmlFor="course">Select topic : </label>
                <select
                  className="bg-blue-200 p-2"
                  name="course"
                  id="course-selector"
                  required
                >
                  <option value="js">Promises</option>
                  <option value="react">Closures</option>
                </select>
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
                <button
                  type="submit"
                  className="btn-secondary"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => console.log("======= implement form submit")}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div>
            <Content item={{question, answer}} />
          </div>
        </>
      )}
    </div>
  );
};
