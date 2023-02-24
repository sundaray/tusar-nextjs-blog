import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const Heading1 = ({ children }) => {
  return (
    <div className="border-b-2 border-gray-100 space-y-6 py-20">
      <Link href="/blog" className="w-24 all-posts-link flex items-center">
        <ArrowLeftIcon className="arrow-left w-4 h-4 text-orange-500" />
        <p className="text-orange-500">All posts</p>
      </Link>
      <h1 className="text-6xl text-gray-900 font-bold mb-12">{children} </h1>
    </div>
  );
};

export default Heading1;
