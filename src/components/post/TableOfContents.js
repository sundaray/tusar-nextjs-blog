import React, { useState, useEffect } from "react";

const useHeadings = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3"))
      .filter((element) => element.id)
      .map((element) => ({
        id: element.id,
        text: element.textContent ?? "",
        level: Number(element.tagName.substring(1)),
      }));
    setHeadings(elements);
  }, []);

  return headings;
};

const useScrollSpy = (ids, options) => {
  const [activeId, setActiveId] = React.useState();
  const observer = React.useRef();
  React.useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id));
    observer.current?.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);
    elements.forEach((el) => {
      if (el) {
        observer.current?.observe(el);
      }
    });
    return () => observer.current?.disconnect();
  }, [ids, options]);
  return activeId;
};

const TableOfContents = () => {
  const headings = useHeadings();
  const activeId = useScrollSpy(
    headings.map(({ id }) => id),
    { rootMargin: "0% 0% -75% 0%" }
  );

  return (
    <nav className="fixed hidden lg:block">
      <h1 className="font-bold mb-2 pl-2 text-gray-900">In this post</h1>
      <ul className="border-l-2 border-gray-200 pl-2">
        {headings.map((heading) => (
          <li key={heading.id} style={{ marginLeft: `${heading.level - 2}em` }}>
            <a
              href={`#${heading.id}`}
              className={`${
                activeId === heading.id
                  ? " text-orange-500 hover:underline transition-all"
                  : "text-gray-400 hover:text-orange-500 transition-all"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
