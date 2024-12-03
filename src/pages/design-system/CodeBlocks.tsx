import React from "react";
import { CodeBlock } from "../../components/atoms/CodeBlock/CodeBlock";
import { PageTitle } from "../../components/atoms";

const CodeBlocks: React.FC = () => {
  const typescriptExample = `
interface User {
  id: number;
  name: string;
  email: string;
}

const createUser = (user: User): void => {
  console.log('Creating user:', user);
}
  `;

  const reactExample = `
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
  `;

  return (
    <div className="p-6">
      <PageTitle
        title="Code Blocks"
        description="Syntax-highlighted code blocks with copy functionality"
      />

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">TypeScript Example</h2>
          <CodeBlock code={typescriptExample} language="typescript" />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">
            React Component Example
          </h2>
          <CodeBlock code={reactExample} language="tsx" />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
