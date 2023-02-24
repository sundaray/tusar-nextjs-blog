import React from "react";

const CodeInline = ({ children }) => {
  return (
    <span className="border rounded font-robotoMono text-sm bg-gray-50 text-gray-700 px-0.5">
      {children}
    </span>
  );
};

export default CodeInline;
