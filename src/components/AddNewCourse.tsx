import { Modal } from "@/ui";
import { useState } from "react";
import { HiMiniPlusCircle } from "react-icons/hi2";

export const AddNewCourse = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  return (
    <div>
      <div
        className="btn-primary mb-2 ml-2 w-48"
        onClick={() => setShowAddModal(true)}
      >
        <HiMiniPlusCircle className="h3-bold mr-1" />
        Add new course
      </div>
      {showAddModal && (
        <Modal onClose={() => setShowAddModal(false)}>
          Implement add new course here.
        </Modal>
      )}
    </div>
  );
};
