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
      <footer className=" text-gray-500 grid place-items-center py-12 border-t-2">
        &#169; {new Date().getFullYear()} &#8226; All rights reserved
      </footer>
    </>
  );
};

export default PostLayout;
