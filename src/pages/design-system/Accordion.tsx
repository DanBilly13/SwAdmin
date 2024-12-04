import React from "react";
import {
  SectionCard,
  PageTitle,
  Accordion,
  CodeBlock,
} from "../../components/atoms";
import { MainContentHead } from "../../components/molecules";
import { DesignSystemContentContainerSlots } from "../../components/atoms/ContentContainerSlots/DesignSystemContentContainerSlots";
import { useDrawerControl } from "../../components/templates";

const AccordionPage = () => {
  const { toggleDrawer } = useDrawerControl();

  const basicAccordionCode = `<Accordion label="Basic Accordion">
  <p>This is the content of the accordion.</p>
</Accordion>`;

  const sizeVariantsCode = `{/* Small Accordion */}
<Accordion label="Small Accordion" size="sm">
  <p>Small accordion content</p>
</Accordion>

{/* Medium Accordion */}
<Accordion label="Medium Accordion" size="md">
  <p>Medium accordion content</p>
</Accordion>

{/* Large Accordion */}
<Accordion label="Large Accordion" size="lg">
  <p>Large accordion content</p>
</Accordion>`;

  const advancedUsageCode = `{/* Accordion with Default Open State */}
<Accordion 
  label="Advanced Accordion" 
  defaultOpen={true}
  onToggle={(isOpen) => console.log(isOpen)}
>
  <div className="space-y-2">
    <p>Complex content can be added here.</p>
    <button className="bg-primary text-white px-3 py-1 rounded">
      Example Button
    </button>
  </div>
</Accordion>`;

  const variantCode = `{/* Secondary Variant (Default) */}
<Accordion label="Secondary Accordion">
  <p>Default secondary accordion content</p>
</Accordion>

{/* Primary Variant */}
<Accordion label="Primary Accordion" variant="primary">
  <p>Primary accordion content</p>
</Accordion>

{/* Variants with Different Sizes */}
<Accordion label="Small Primary" variant="primary" size="sm">
  <p>Small primary accordion</p>
</Accordion>
<Accordion label="Large Secondary" size="lg">
  <p>Large secondary accordion</p>
</Accordion>`;

  const iconWeightsExampleCode = `{/* Default Accordion */}
<Accordion label="Default Accordion" variant="primary" />

{/* Accordion with Variants */}
<Accordion label="Secondary Accordion" variant="secondary" />

{/* Accordion with Different Sizes */}
<Accordion label="Small Accordion" size="sm" />
<Accordion label="Medium Accordion" size="md" />
<Accordion label="Large Accordion" size="lg" />`;

  return (
    <DesignSystemContentContainerSlots
      header={
        <>
          <MainContentHead
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "Design System", href: "/design-system" },
              { label: "Accordion", href: "/design-system/accordion" },
            ]}
            onMenuClick={toggleDrawer}
            actions={[
              {
                label: "View Source",
                onClick: () =>
                  window.open(
                    "https://github.com/DanBilly13/SwAdmin/tree/main/src/components/atoms/Accordion",
                    "_blank"
                  ),
                leadingIcon: "code",
              },
            ]}
          />
          <PageTitle
            title="Accordion"
            description="An interactive component that expands and collapses to reveal or hide content."
          />
        </>
      }
      content={
        <div className="space-y-8">
          {/* Basic Component Example */}
          <SectionCard title="Basic Example">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <Accordion label="Basic Accordion" labelTrailing="More">
                  <p>This is the content of the accordion.</p>
                </Accordion>
              </div>
              <CodeBlock language="typescript" code={basicAccordionCode} />
            </div>
          </SectionCard>

          {/* Size Variants */}
          <SectionCard title="Size Variants">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <Accordion
                  label="Small Accordion"
                  labelTrailing="More"
                  size="sm"
                >
                  <p>Small accordion content</p>
                </Accordion>
                <Accordion
                  label="Medium Accordion"
                  // labelTrailing="More"
                  size="md"
                >
                  <p>Medium accordion content</p>
                </Accordion>
                <Accordion
                  label="Large Accordion"
                  // labelTrailing="More"
                  size="lg"
                >
                  <p>Large accordion content</p>
                </Accordion>
              </div>
              <CodeBlock language="typescript" code={sizeVariantsCode} />
            </div>
          </SectionCard>

          {/* Variants */}
          <SectionCard title="Variants">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <Accordion label="Secondary Accordion">
                  <p>Default secondary accordion content</p>
                </Accordion>
                <Accordion
                  label="Primary Accordion"
                  // labelTrailing="More"
                  variant="primary"
                >
                  <p>Primary accordion content</p>
                </Accordion>
                <Accordion
                  label="Small Primary"
                  labelTrailing="More"
                  variant="primary"
                  size="sm"
                >
                  <p>Small primary accordion</p>
                </Accordion>
                <Accordion
                  label="Large Secondary"
                  // labelTrailing="More"
                  size="lg"
                >
                  <p>Large secondary accordion</p>
                </Accordion>
              </div>
              <CodeBlock language="typescript" code={variantCode} />
            </div>
          </SectionCard>

          {/* Advanced Usage */}
          <SectionCard title="Advanced Usage">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <Accordion
                  label="Advanced Accordion"
                  defaultOpen={true}
                  onToggle={(isOpen) => console.log(isOpen)}
                >
                  <div className="space-y-2">
                    <p>Complex content can be added here.</p>
                    <button className="bg-primary text-white px-3 py-1 rounded">
                      Example Button
                    </button>
                  </div>
                </Accordion>
              </div>
              <CodeBlock language="typescript" code={advancedUsageCode} />
            </div>
          </SectionCard>
        </div>
      }
    />
  );
};

export default AccordionPage;
