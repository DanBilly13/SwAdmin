import React from "react";
import { ContentContainer } from "../../components/atoms/ContentContainer/ContentContainer";
import { MainContentHead } from "../../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../../components/templates";
import { PageTitle } from "../../components/atoms/PageTitle/PageTitle";

interface ColorBlockProps {
  colorClass: string;
  label: string;
  hexCode: string;
  tokenName: string;
  textClass?: string;
  isBorder?: boolean;
}

const ColorBlock = ({ colorClass, label, hexCode, tokenName, textClass = 'text-content', isBorder }: ColorBlockProps) => {
  // For text colors, convert them to background colors
  const bgColorClass = colorClass.replace('text-', 'bg-');
  
  return (
    <div className="flex flex-col">
      {isBorder ? (
        <div className={`h-20 w-full rounded-lg bg-white border-2 ${colorClass} mb-4`} />
      ) : (
        <div className={`h-20 w-full rounded-lg ${bgColorClass} mb-4`} />
      )}
      <div className="space-y-1">
        <p className={`text-label-l ${textClass}`}>{label}</p>
        <p className="text-body-s text-content-secondary">Token: {tokenName}</p>
        <p className="text-body-s text-content-secondary">Class: {colorClass}</p>
        <p className="text-body-s text-content-tertiary">{hexCode}</p>
      </div>
    </div>
  );
};

const Colors = () => {
  const { toggleDrawer } = useDrawerControl();

  return (
    <ContentContainer>
      <MainContentHead
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Design System", href: "/components" },
          { label: "Colors", href: "/colors" },
        ]}
        onMenuClick={toggleDrawer}
        actions={[
          {
            label: "View Source",
            onClick: () =>
              window.open(
                "https://github.com/yourusername/SwAdmin/tree/main/src/styles/colors",
                "_blank"
              ),
            leadingIcon: "code",
          },
        ]}
      >
        <PageTitle 
          title="Colors" 
          description="Color system and palette for consistent visual design."
        />
      </MainContentHead>

      {/* Raw Colors */}
      <section className="mb-12">
        <h2 className="text-headline-s mb-6">Gray Scale</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <ColorBlock
            colorClass="bg-gray-950"
            label="Gray 950"
            tokenName="gray-950"
            hexCode="#222222"
          />
          <ColorBlock
            colorClass="bg-gray-650"
            label="Gray 650"
            tokenName="gray-650"
            hexCode="#767676"
          />
          <ColorBlock
            colorClass="bg-gray-450"
            label="Gray 450"
            tokenName="gray-450"
            hexCode="#AFAFAF"
          />
          <ColorBlock
            colorClass="bg-gray-200"
            label="Gray 200"
            tokenName="gray-200"
            hexCode="#E2E2E2"
          />
          <ColorBlock
            colorClass="bg-gray-white"
            label="Gray White"
            tokenName="gray-white"
            hexCode="#FFFFFF"
          />
        </div>
      </section>

      {/* Content Colors */}
      <section className="mb-12">
        <h2 className="text-headline-s mb-6">Content Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <ColorBlock
            colorClass="bg-content"
            label="Content"
            tokenName="color-content"
            hexCode="#222222"
          />
          <ColorBlock
            colorClass="bg-content-secondary"
            label="Content Secondary"
            tokenName="color-content-secondary"
            hexCode="#767676"
          />
          <ColorBlock
            colorClass="bg-content-tertiary"
            label="Content Tertiary"
            tokenName="color-content-tertiary"
            hexCode="#AFAFAF"
          />
          <ColorBlock
            colorClass="bg-content-disabled"
            label="Content Disabled"
            tokenName="color-content-disabled"
            hexCode="#E2E2E2"
          />
          <ColorBlock
            colorClass="bg-content-error"
            label="Content Error"
            tokenName="color-content-error"
            hexCode="#FF0000"
          />
          <ColorBlock
            colorClass="bg-content-success"
            label="Content Success"
            tokenName="color-content-success"
            hexCode="#4BB543"
          />
          <ColorBlock
            colorClass="bg-content-caution"
            label="Content Caution"
            tokenName="color-content-caution"
            hexCode="#FF9500"
          />
        </div>
      </section>

      {/* Surface Colors */}
      <section className="mb-12">
        <h2 className="text-headline-s mb-6">Surface Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <ColorBlock
            colorClass="bg-surface"
            label="Surface"
            tokenName="color-surface"
            hexCode="#FFFFFF"
          />
          <ColorBlock
            colorClass="bg-surface-error"
            label="Surface Error"
            tokenName="color-surface-error"
            hexCode="#F9DEDC"
          />
          <ColorBlock
            colorClass="bg-surface-success"
            label="Surface Success"
            tokenName="color-surface-success"
            hexCode="#C0EECC"
          />
          <ColorBlock
            colorClass="bg-surface-caution"
            label="Surface Caution"
            tokenName="color-surface-caution"
            hexCode="#FFE7C6"
          />
        </div>
      </section>

      {/* Fill Colors */}
      <section className="mb-12">
        <h2 className="text-headline-s mb-6">Fill Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <ColorBlock
            colorClass="bg-fill-primary"
            label="Fill Primary"
            tokenName="color-fill-primary"
            hexCode="#222222"
          />
          <ColorBlock
            colorClass="bg-fill-on"
            label="Fill On"
            tokenName="color-on-fill"
            hexCode="#FFFFFF"
          />
        </div>
      </section>

      {/* Border & Background Colors */}
      <section className="mb-12">
        <h2 className="text-headline-s mb-6">Border & Background Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <ColorBlock
            colorClass="border-border"
            label="Border"
            tokenName="color-border"
            hexCode="#E2E2E2"
            isBorder
          />
          <ColorBlock
            colorClass="bg-bg"
            label="Background"
            tokenName="color-bg"
            hexCode="#F5F5F5"
          />
        </div>
      </section>
    </ContentContainer>
  );
};

export default Colors;
