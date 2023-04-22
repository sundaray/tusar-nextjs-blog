import React from "react";
import { FaRegStickyNote } from "react-icons/fa";

const Note = ({ children }) => {
  return (
    <div className="border-l-4 border-orange-500 bg-zinc-50 px-4 py-4 rounded">
      <div className="flex items-center mb-2">
        <FaRegStickyNote className="w-4 h-4 text-gray-700 mr-1" />
        <p className="font-bold text-gray-700">NOTE</p>
      </div>
      {children}
    </div>
  );
};

export default Note;
