import React from "react";

const Note = ({ children }) => {
  return (
    <div className="border-l-4 border-orange-500 bg-gray-100 pl-4 py-4">
      {children}
    </div>
  );
};

export default Note;