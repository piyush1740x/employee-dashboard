import React from "react";

const SearchBaar = ({ setSearchQuery }) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 mt-5 bg-white rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
        Employee Dashboard
      </h1>
      <h2 className="text-gray-600 text-center mb-4">
        Search employees by their ID and view details below
      </h2>
      <div className="relative">
        <input
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
          type="search"
          placeholder="Enter Employee ID..."
          className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default SearchBaar;
