import React from "react";
import TableOfContents from "./TableOfContents";
import Author from "@/components/post/Author";

const PostLayout = ({ children, toc = true }) => {
  return (
    <>
      <div className="post-layout mb-12">
        <article className="post space-y-6">{children}</article>
        {toc && (
          <aside className="toc">
            <TableOfContents />
          </aside>
        )}
      </div>
      <footer className=" bg-gray-900 text-gray-500 grid place-items-center py-12">
        &#169; {new Date().getFullYear()} - All rights reserved
      </footer>
    </>
  );
};

export default PostLayout;
