import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Breadcrumbs from "./BreadCrumbs";

const Heading1 = ({ children, date }) => {
  return (
    <div className="mt-12 py-6 px-2 bg-zinc-50">
      <Link
        href="/blog"
        className="w-24 pb-12 all-posts-link flex items-center"
      >
        <ArrowLeftIcon className="arrow-left w-4 h-4 text-orange-500" />
        <p className="text-orange-500">All posts</p>
      </Link>
      <Breadcrumbs />
      <h1 className="text-4xl md:text-6xl text-gray-900 font-bold pb-4">
        {children}{" "}
      </h1>
      <p className="text-gray-400 mb-6">Hemanta Sundaray &#8226; {date}</p>
    </div>
  );
};

export default Heading1;
