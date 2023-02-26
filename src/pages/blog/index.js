import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const posts = [
  {
    title: "Introduction to C++",
    url: "first-blog",
    category: "C++",
    date: "25th Feb, 2023",
  },
];

const index = () => {
  return (
    <div className="w-11/12 md:w-3/5 m-auto">
      <Link
        href="/"
        className="w-24 all-posts-link flex items-center m-auto mt-6"
      >
        <ArrowLeftIcon className="arrow-left w-4 h-4 text-orange-500" />
        <p className="text-orange-500">Home</p>
      </Link>
      <h1 className="text-4xl md:text-6xl text-gray-900 text-center font-bold mt-6 mb-24">
        Blog posts
      </h1>
      <div className="m-auto">
        {posts.map(({ title, url, date }) => (
          <div key={title}>
            <p className="text-gray-400 text-sm">{date}</p>
            <Link href={`/blog/${url}`}>
              <h2 className="text-gray-700 text-2xl md:text-4xl font-medium">
                {title}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
