import { SectionCard, PageTitle } from "../../components/atoms";
import { DesignSystemContentContainerSlots } from "../../components/atoms/ContentContainerSlots/DesignSystemContentContainerSlots";
import { MainContentHead } from "../../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../../components/templates";
import { Label } from "../../components/molecules/Label";

const TextBlocks = () => {
  const { toggleDrawer } = useDrawerControl();

  return (
    <DesignSystemContentContainerSlots
      header={
        <>
          <MainContentHead
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "Design System", href: "/design-system" },
              { label: "Text Blocks", href: "/design-system/text-blocks" },
            ]}
            onMenuClick={toggleDrawer}
            actions={[
              {
                label: "View Source",
                onClick: () =>
                  window.open(
                    "https://github.com/yourusername/SwAdmin/tree/main/src/components/atoms/TextBlock",
                    "_blank"
                  ),
                leadingIcon: "code",
              },
            ]}
          />
          <PageTitle
            title="Text Blocks"
            description="Reusable text components for consistent typography and layout"
          />
        </>
      }
      content={
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
                // size="small" 
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
      }
    />
  );
};

export default TextBlocks;
