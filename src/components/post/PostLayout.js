import React from "react";

const PostLayout = ({ children }) => {
  return (
    <>
      <div className="post-layout">
        <article className="article space-y-6">{children}</article>
      </div>
    </>
  );
};

export default PostLayout;
