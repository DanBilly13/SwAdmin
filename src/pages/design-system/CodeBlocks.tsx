import React from "react";
import { CodeBlock } from "../../components/atoms/CodeBlock/CodeBlock";
import {
  PageTitle,
  DesignSystemContentContainerSlots,
} from "../../components/atoms";
import { MainContentHead } from "../../components/molecules";
import { useDrawerControl } from "../../components/templates";

const CodeBlocks: React.FC = () => {
  const { toggleDrawer } = useDrawerControl();
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
    <DesignSystemContentContainerSlots
      header={
        <>
          <MainContentHead
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "Design System", href: "/design-system" },
              { label: "Code Blocks", href: "/design-system/code-blocks" },
            ]}
            onMenuClick={toggleDrawer}
          />
          <PageTitle
            title="Code Blocks"
            description="Syntax-highlighted code blocks with copy functionality"
          />
        </>
      }
      content={
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">TypeScript Example</h2>
            <CodeBlock code={typescriptExample} language="typescript" />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">
              React Component Example
            </h2>
            <CodeBlock code={reactExample} language="typescript" />
          </div>
        </div>
      }
    />
  );
};

export default CodeBlocks;
