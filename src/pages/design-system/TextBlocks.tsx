import React from "react";
import { SectionCard, PageTitle } from "../../components/atoms";
import { ContentContainer } from "../../components/atoms/ContentContainer/ContentContainer";
import { MainContentHead } from "../../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../../components/templates";
import { Label } from "../../components/molecules/Label";

const TextBlocks = () => {
  const { toggleDrawer } = useDrawerControl();

  return (
    <ContentContainer>
      <MainContentHead
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Design System", href: "/components" },
          { label: "Text Blocks", href: "/text-blocks" },
        ]}
        onMenuClick={toggleDrawer}
        actions={[
          {
            label: "View Source",
            onClick: () =>
              window.open(
                "https://github.com/yourusername/SwAdmin/tree/main/src/components/molecules/TextBlocks",
                "_blank"
              ),
            leadingIcon: "code",
          },
        ]}
      >
        <PageTitle
          title="Text Blocks"
          description="Reusable text components for consistent typography and layout"
        />
      </MainContentHead>

      <div className="space-y-8">
        <SectionCard title="Page Title">
          <div className="space-y-4">
            <PageTitle 
              title="Main Page Title" 
              description="Descriptive subtitle for the page" 
            />
            <PageTitle 
              title="Smaller Page Title" 
              description="Alternative page title style" 
              size="small" 
            />
          </div>
        </SectionCard>

        <SectionCard title="Label">
          <div className="space-y-4">
            <Label text="Default Label" />
            <Label 
              text="Label with Button" 
              button={{
                leadingIcon: "add",
                onClick: () => console.log("Label button clicked"),
                ariaLabel: "Add action"
              }} 
            />
          </div>
        </SectionCard>
      </div>
    </ContentContainer>
  );
};

export default TextBlocks;
