import React from 'react';
import { Icon } from '../Icon/Icon';

interface CodeBlockProps {
  code: string;
  language?: string;
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

  return (
    <div className={`relative rounded-lg bg-gray-900 ${className}`}>
      {showCopy && (
        <button
          onClick={copyToClipboard}
          className="absolute right-2 top-2 p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Copy code"
        >
          <Icon name="content_copy" size="small" />
        </button>
      )}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
        <span className="text-sm text-gray-400">{language}</span>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-gray-300 font-mono">{code}</code>
      </pre>
    </div>
  );
};
