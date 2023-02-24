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
    </div>
  );
};

export default PostLayout;
