import React, { useEffect, useState } from "react";

import { Button } from "../Button/Button";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

interface CodeBlockProps {
  code: string;
  language?: "typescript" | "javascript" | "jsx" | "tsx" | "css" | "html";
  showCopy?: boolean;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "tsx",
  showCopy = true,
  className = "",
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);

    const timer = setTimeout(() => {
      setIsCopied(false);
    }, 2000);

    return () => clearTimeout(timer);
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  return (
    <div className={`rounded-lg overflow-hidden  ${className}`}>
      <div className="flex h-auto content-center items-center justify-between px-4 py-2 bg-content">
        <span className="text-label-s text-content-secondary uppercase">
          {language}
        </span>
        {showCopy && (
          <Button
            onClick={copyToClipboard}
            variant="secondary"
            size="small"
            aria-label="Copy code"
            leadingIcon="content_copy"
          >
            {isCopied ? "Copied" : "Copy"}
          </Button>
        )}
      </div>
      <pre className="p-4 overflow-x-auto" style={{ margin: 0 }}>
        <code
          className={`language-${language} text-body-s text-content-tertiary font-mono`}
          style={{ margin: 0, fontSize: 14 }}
        >
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
