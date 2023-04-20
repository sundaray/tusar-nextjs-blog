import React from "react";

const Highlight = ({ children }) => {
  return (
    <span className="border rounded font-robotoMono text-sm bg-zinc-50 text-gray-700 px-0.5">
      {children}
    </span>
  );
};

export default Highlight;
