import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { FaRegCopy } from "react-icons/fa";

const CodeBlock = ({ children, highlight = [], title, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mb-6">
      <CopyToClipboard
        onCopy={handleCopy}
        text={children}
        className="absolute top-4 right-4 text-gray-400"
      >
        <button>
          {copied ? (
            <p className="text-gray-100 text-sm">copied</p>
          ) : (
            <FaRegCopy className="hover:text-gray-100 transition-all" />
          )}
        </button>
      </CopyToClipboard>

      <SyntaxHighlighter
        className={`${
          language === "cpp"
            ? "synatx-cpp rounded-xl"
            : language === "json"
            ? "syntax-json"
            : ""
        }`}
        language={language}
        style={dracula}
        showLineNumbers
        wrapLines
        lineProps={(lineNumber) => {
          let style = { display: "block" };
          if (highlight.includes(lineNumber)) {
            style.backgroundColor = "#404040";
          }
          return { style };
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
