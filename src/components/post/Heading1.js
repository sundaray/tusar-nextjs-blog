import React from "react";
import Link from "next/link";

const Heading1 = ({ children }) => {
  return (
    <div className="border-b-2 border-gray-100 space-y-6 py-20">
      <Link href="/blog">
        <p className="text-orange-500">All posts</p>
      </Link>
      <h1 className="text-6xl text-gray-900 font-bold mb-12">{children} </h1>
    </div>
  );
};

export default Heading1;
