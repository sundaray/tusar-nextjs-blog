import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import InputSearch from "@/components/form/InputSearch";
import { motion } from "framer-motion";

const posts = [
  {
    title: "Introduction to C++",
    url: "first-blog",
    category: "C++",
    date: "25th Feb, 2023",
  },
];

const searchResultVariants = {
  initial: { y: ".2rem", opacity: 0 },
  animate: {
    y: "0rem",
    opacity: 1,
  },
};

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const searchResult = () => {
    let filteredPosts;
    if (searchQuery) {
      filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filteredPosts;
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-6">
      <Link href="/" className="w-24 pt-6 all-posts-link flex items-center">
        <ArrowLeftIcon className="arrow-left w-4 h-4 text-orange-500" />
        <p className="text-orange-500">Home</p>
      </Link>
      <h1 className="text-4xl md:text-6xl text-gray-900 font-bold pb-10">
        Blog posts
      </h1>
      <InputSearch
        label="Search"
        type="search"
        field="search"
        onChange={handleSearch}
      />
      <div>
        {!searchQuery &&
          posts.map(({ title, url, date }) => (
            <div key={title}>
              <p className="text-gray-400 text-sm">{date}</p>
              <Link href={`/blog/${url}`}>
                <h2 className="text-gray-700 text-2xl md:text-4xl font-medium">
                  {title}
                </h2>
              </Link>
            </div>
          ))}
        {searchQuery &&
          searchResult().length > 0 &&
          searchResult().map(({ title, url, date }) => (
            <div key={title}>
              <p className="text-gray-400 text-sm">{date}</p>
              <Link href={`/blog/${url}`}>
                <h2 className="text-gray-700 text-2xl md:text-4xl font-medium">
                  {title}
                </h2>
              </Link>
            </div>
          ))}
        {searchQuery && searchResult().length === 0 && (
          <motion.p
            variants={searchResultVariants}
            initial="initial"
            animate="animate"
            exit="initial"
            className="text-orange-500"
          >
            No blog posts match your search query
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default Index;
