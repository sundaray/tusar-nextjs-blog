import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Breadcrumbs from "./BreadCrumbs";

const Heading1 = ({ children, date }) => {
  return (
    <div className="border-b-2 border-gray-200 pt-12">
      <Link href="/blog" className="w-24 all-posts-link flex items-center">
        <ArrowLeftIcon className="arrow-left w-4 h-4 text-orange-500" />
        <p className="text-orange-500">All posts</p>
      </Link>
      <h1 className="text-4xl md:text-6xl text-gray-900 font-bold pt-6">
        {children}{" "}
      </h1>
      <p className="text-gray-400 mb-6">Tusar Palauri | {date}</p>
      <Breadcrumbs />
    </div>
  );
};

export default Heading1;
