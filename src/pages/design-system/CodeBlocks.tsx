import React from "react";
import { SectionCard, PageTitle, CodeBlock } from "../../components/atoms";
import { ContentContainer } from "../../components/atoms/ContentContainer/ContentContainer";
import { MainContentHead } from "../../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../../components/templates";

const CodeBlocks = () => {
  const { toggleDrawer } = useDrawerControl();

  const exampleCode = `interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  onClick,
  children,
}) => {
  return (
    <button
      className={\`btn \${variant} \${size}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};`;

  return (
    <ContentContainer>
      <MainContentHead
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Design System", href: "/components" },
          { label: "Code Blocks", href: "/code-blocks" },
        ]}
        onMenuClick={toggleDrawer}
        actions={[
          {
            label: "View Source",
            onClick: () =>
              window.open(
                "https://github.com/yourusername/SwAdmin/tree/main/src/components/atoms/CodeBlock",
                "_blank"
              ),
            leadingIcon: "code",
          },
        ]}
      >
        <PageTitle
          title="Code Blocks"
          description="Display code snippets with syntax highlighting and copy functionality"
        />
      </MainContentHead>

      <div className="space-y-8">
        <SectionCard title="Basic Usage">
          <div className="space-y-4">
            <p className="text-gray-600">
              Code blocks can be used to display code snippets with optional copy functionality.
            </p>
            <CodeBlock
              code={exampleCode}
              language="tsx"
            />
          </div>
        </SectionCard>

        <SectionCard title="Without Copy Button">
          <div className="space-y-4">
            <p className="text-gray-600">
              The copy button can be hidden if needed.
            </p>
            <CodeBlock
              code="const greeting = 'Hello, World!';"
              language="typescript"
              showCopy={false}
            />
          </div>
        </SectionCard>
      </div>
    </ContentContainer>
  );
};

export default CodeBlocks;
