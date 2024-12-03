import React, { useEffect } from 'react';
import { Icon } from '../Icon/Icon';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';

interface CodeBlockProps {
  code: string;
  language?: 'typescript' | 'javascript' | 'jsx' | 'tsx' | 'css' | 'html';
  showCopy?: boolean;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'tsx',
  showCopy = true,
  className = '',
}) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  return (
    <div className={`relative rounded-lg bg-gray-900 ${className}`}>
      {showCopy && (
        <button
          onClick={copyToClipboard}
          className="absolute right-2 top-2 p-2 text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Copy code"
        >
          <Icon name="content_copy" size="md" />
        </button>
      )}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
        <span className="text-sm text-gray-400 uppercase">{language}</span>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className={`language-${language} text-sm text-gray-300 font-mono`}>
          {code}
        </code>
      </pre>
    </div>
  );
};
