import { AddQuestion } from "@/components";
import { useState } from "react";
import { HiMiniPlusCircle } from "react-icons/hi2";

const AdminLandingPage = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <h1 className="h1-bold mb-2">Welcome!</h1>
      {!showForm && (
        <button
          className="btn-primary mb-2 w-full sm:w-[25rem]"
          onClick={() => setShowForm(true)}
        >
          <HiMiniPlusCircle className="h3-bold mr-1" />
          Add a new question
        </button>
      )}
      {showForm && <AddQuestion onCancel={() => setShowForm(false)} />}
    </div>
  );
};

export default AdminLandingPage;
