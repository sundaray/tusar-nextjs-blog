import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { FaRegCopy } from "react-icons/fa";

const CodeBlock = ({
  children,
  highlight = [],
  language,
  fileName = false,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative pt-2">
      <div className="flex items-center pl-2 rounded-t absolute -top-2 left-0 bg-zinc-100 w-full h-8 text-sm font-medium">
        {fileName}
      </div>
      <CopyToClipboard
        onCopy={handleCopy}
        text={children}
        className="absolute top-0 right-4 text-gray-400"
      >
        <button>
          {copied ? (
            <p className="text-blue-500 text-sm">copied</p>
          ) : (
            <FaRegCopy className="hover:text-blue-500 transition-all" />
          )}
        </button>
      </CopyToClipboard>

      <SyntaxHighlighter
        className={`${
          language === "jsx"
            ? "text-sm"
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
            style.backgroundColor = "#374151";
            style.borderLeft = "solid 1px #f97316";
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
