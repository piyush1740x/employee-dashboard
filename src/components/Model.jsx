import React, { useState } from "react";

const Model = ({ student, onClose, onUpdate }) => {
  const [editedStudent, setEditedStudent] = useState(student);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setEditedStudent({ ...editedStudent, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    onUpdate(editedStudent);
    setIsEditing(false);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
        >
          ❌
        </button>

        <div className="flex flex-col items-center text-center">
          <img
            src={editedStudent.profile_pic}
            alt={editedStudent.name}
            className="w-20 h-20 rounded-full border mb-4"
          />

          <input
            type="text"
            name="name"
            value={editedStudent.name}
            onChange={handleChange}
            disabled={!isEditing}
            className={`border p-2 rounded-md w-full mb-2 ${
              isEditing ? "bg-white" : "bg-gray-100"
            }`}
          />

          <input
            type="text"
            name="class"
            value={editedStudent.class}
            onChange={handleChange}
            disabled={!isEditing}
            className={`border p-2 rounded-md w-full mb-2 ${
              isEditing ? "bg-white" : "bg-gray-100"
            }`}
          />

          <div className="flex justify-between w-full mt-3">
            {isEditing ? (
              <>
                <button
                  onClick={handleUpdate}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
