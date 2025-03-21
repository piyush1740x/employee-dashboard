"use client";
import { students } from "@/data/studentData";
import { useEffect, useState } from "react";
import Model from "./Model";

export default function EmployeeCard({ searchQuery }) {
  const [storedStudents, setStoredStudents] = useState([]);
  const [checkedStudents, setCheckedStudents] = useState({});
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
    const studentData = JSON.parse(localStorage.getItem("students")) || [];
    setStoredStudents(studentData);
  }, []);

  const handleCheckboxChange = (e, id) => {
    e.stopPropagation();
    setCheckedStudents((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleDelete = (e, id) => {
    e.stopPropagation();
    const updatedStudents = storedStudents.filter((std) => std.id !== id);
    setStoredStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };

  const handleBulkDelete = () => {
    const updatedStudents = storedStudents.filter(
      (std) => !checkedStudents[std.id]
    );
    setStoredStudents(updatedStudents);
    setCheckedStudents({});
    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };

  const handleCardClick = (e, std) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "BUTTON") {
      return;
    }
    setSelectedStudent(std);
    setIsEditing(false);
  };

  const handleEditClick = (e, std) => {
    e.stopPropagation(); 
    setSelectedStudent(std);
    setIsEditing(true);
  };

  const closeModal = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="w-full relative">
      {Object.values(checkedStudents).some((isChecked) => isChecked) && (
        <button
          onClick={handleBulkDelete}
          className="mb-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Delete Selected
        </button>
      )}

      <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {storedStudents
          .filter(
            (std) =>
              std.name.toLowerCase().includes(searchQuery) ||
              std.id.toString().includes(searchQuery)
          )
          .map((std) => (
            <div
              key={std.id}
              className={`p-5 rounded-xl shadow-md border flex flex-col items-center text-center transition hover:shadow-lg ${
                checkedStudents[std.id] ? "bg-blue-300 text-white" : "bg-white"
              }`}
              onClick={(e) => handleCardClick(e, std)}
            >
              <div className="flex items-center justify-between w-full px-3 mb-3">
                <img
                  src={std.profile_pic}
                  alt={std.name}
                  className="w-12 h-12 rounded-full border"
                />
                <input
                  type="checkbox"
                  checked={checkedStudents[std.id] || false}
                  onChange={(e) => handleCheckboxChange(e, std.id)}
                  className="w-5 h-5 text-blue-400 border-gray-300 rounded focus:ring-blue-500"
                />
              </div>

              <p className="text-lg font-semibold">{std.name}</p>
              <p className="text-sm">{std.class}</p>

              <div className="flex w-full justify-between mt-4">
                <button
                  onClick={(e) => handleDelete(e, std.id)}
                  className="bg-red-500 text-white px-4 py-1.5 rounded-md text-sm hover:bg-red-600 transition"
                >
                  Delete
                </button>
                <button
                  onClick={(e) => handleEditClick(e, std)}
                  className="bg-blue-500 text-white px-4 py-1.5 rounded-md text-sm hover:bg-blue-600 transition"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
      </div>

      {selectedStudent && (
        <Model student={selectedStudent} onClose={closeModal} isEditing={isEditing} />
      )}
    </div>
  );
}
