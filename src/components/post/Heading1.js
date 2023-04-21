import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Breadcrumbs from "./BreadCrumbs";

const Heading1 = ({ children, date }) => {
  return (
    <div className="mt-12 ">
      <Link
        href="/blog"
        className="w-24 pb-12 pl-2 all-posts-link flex items-center"
      >
        <ArrowLeftIcon className="arrow-left w-4 h-4 text-orange-500" />
        <p className="text-orange-500">All posts</p>
      </Link>
      <div className="bg-zinc-50 px-2 border-b-2 space-y-4 py-6">
        <Breadcrumbs />
        <h1 className="text-4xl md:text-6xl text-gray-900 font-bold">
          {children}{" "}
        </h1>
        <p className="text-gray-400">Hemanta Sundaray &#8226; {date}</p>
      </div>
    </div>
  );
};

export default Heading1;
