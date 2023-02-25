import React from "react";
import TableOfContents from "./TableOfContents";

const PostLayout = ({ children, toc = true }) => {
  return (
    <div className="post-layout">
      <article className="post space-y-6">{children}</article>
      {toc && (
        <aside className="toc">
          <TableOfContents />
        </aside>
      )}
      <footer className="footer bg-gray-900 text-gray-400 grid place-items-center">
        &#169; {new Date().getFullYear()} - All rights reserved
      </footer>
    </div>
  );
};

export default PostLayout;
