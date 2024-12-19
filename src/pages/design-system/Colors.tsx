import React from "react";
import { DesignSystemContentContainerSlots } from "../../components/atoms/ContentContainerSlots/DesignSystemContentContainerSlots";
import { MainContentHead } from "../../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../../components/templates";
import { PageTitle } from "../../components/atoms/PageTitle/PageTitle";
import { SectionCard } from "../../components/atoms";
import { mapped } from "../../theme/colorPalettes";

interface ColorBlockProps {
  colorClass: string;
  label: string;
  hexCode: string;
  tokenName: string;
  textClass?: string;
  isBorder?: boolean;
  bgClass?: string;
}

const ColorBlock = ({
  colorClass,
  label,
  hexCode,
  tokenName,
  textClass = "text-content-primary",
  isBorder,
  bgClass,
}: ColorBlockProps) => {
  const isTextColor = colorClass.startsWith("text-");

  return (
    <div className="flex flex-col">
      {isBorder ? (
        <div
          className={`h-20 w-full rounded-lg bg-white border-2 ${colorClass} mb-4`}
        />
      ) : isTextColor ? (
        <div className={`h-20 w-full rounded-lg bg-surface-secondary mb-4 flex items-center justify-center`}>
          <span className={`text-2xl font-medium ${colorClass}`}>Aa</span>
        </div>
      ) : (
        <div className={`h-20 w-full rounded-lg ${colorClass} mb-4`} />
      )}
      <div className="space-y-1">
        <p className={`text-label-l ${textClass}`}>{label}</p>
        <p className="text-body-s text-content-secondary">Token: {tokenName}</p>
        <p className="text-body-s text-content-secondary">
          Class: {colorClass}
        </p>
        <p className="text-body-s text-content-tertiary">{hexCode}</p>
      </div>
    </div>
  );
};

const Colors = () => {
  const { toggleDrawer } = useDrawerControl();

  return (
    <DesignSystemContentContainerSlots
      header={
        <>
          <MainContentHead
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "Design System", href: "/design-system" },
              { label: "Colors", href: "/design-system/colors" },
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
          />
          <PageTitle
            title="Colors"
            description="Color system and palette for consistent visual design."
          />
        </>
      }
      content={
        <div className="space-y-8">
          {/* Brand Colors */}
          <SectionCard title="Brand Colors">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <ColorBlock
                colorClass="bg-fill-brand-primary"
                label="Brand Primary"
                tokenName="fill-brand-primary"
                hexCode={mapped.primary.dark}
              />
              <ColorBlock
                colorClass="bg-fill-brand-secondary"
                label="Brand Secondary"
                tokenName="fill-brand-secondary"
                hexCode={mapped.primary.default}
              />
              <ColorBlock
                colorClass="bg-bg-brand-primary"
                label="Brand Background"
                tokenName="bg-brand-primary"
                hexCode={mapped.primary.default}
              />
            </div>
          </SectionCard>

          {/* Surface Colors */}
          <SectionCard title="Surface Colors">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <ColorBlock
                colorClass="bg-surface-primary"
                label="Surface Primary"
                tokenName="surface-primary"
                hexCode={mapped.neutral.white}
              />
              <ColorBlock
                colorClass="bg-surface-secondary"
                label="Surface Secondary"
                tokenName="surface-secondary"
                hexCode={mapped.neutral.lighter}
              />
              <ColorBlock
                colorClass="bg-surface-tertiary"
                label="Surface Tertiary"
                tokenName="surface-tertiary"
                hexCode={mapped.neutral.light}
              />
              <ColorBlock
                colorClass="bg-surface-success"
                label="Surface Success"
                tokenName="surface-success"
                hexCode={mapped.success.light}
              />
              <ColorBlock
                colorClass="bg-surface-error"
                label="Surface Error"
                tokenName="surface-error"
                hexCode={mapped.error.light}
              />
              <ColorBlock
                colorClass="bg-surface-caution"
                label="Surface Caution"
                tokenName="surface-caution"
                hexCode={mapped.caution.light}
              />
            </div>
          </SectionCard>

          {/* Fill Colors */}
          <SectionCard title="Fill Colors">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <ColorBlock
                colorClass="bg-fill-primary"
                label="Fill Primary"
                tokenName="fill-primary"
                hexCode={mapped.neutral.darker}
              />
              <ColorBlock
                colorClass="bg-fill-secondary"
                label="Fill Secondary"
                tokenName="fill-secondary"
                hexCode={mapped.neutral.light}
              />
              <ColorBlock
                colorClass="bg-fill-tertiary"
                label="Fill Tertiary"
                tokenName="fill-tertiary"
                hexCode={mapped.neutral.white}
              />
              <ColorBlock
                colorClass="bg-fill-success"
                label="Fill Success"
                tokenName="fill-success"
                hexCode={mapped.success.default}
              />
              <ColorBlock
                colorClass="bg-fill-error"
                label="Fill Error"
                tokenName="fill-error"
                hexCode={mapped.error.default}
              />
              <ColorBlock
                colorClass="bg-fill-caution"
                label="Fill Caution"
                tokenName="fill-caution"
                hexCode={mapped.caution.default}
              />
              <ColorBlock
                colorClass="bg-fill-disabled"
                label="Fill Disabled"
                tokenName="fill-disabled"
                hexCode={mapped.neutral.lighter}
              />
            </div>
          </SectionCard>

          {/* Content Colors */}
          <SectionCard title="Content Colors">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <ColorBlock
                colorClass="bg-content-primary"
                label="Content Primary"
                tokenName="content-primary"
                hexCode={mapped.neutral.darker}
              />
              <ColorBlock
                colorClass="bg-content-secondary"
                label="Content Secondary"
                tokenName="content-secondary"
                hexCode={mapped.neutral.dark}
              />
              <ColorBlock
                colorClass="bg-content-tertiary"
                label="Content Tertiary"
                tokenName="content-tertiary"
                hexCode={mapped.neutral.lighter}
              />
              <ColorBlock
                colorClass="bg-content-brand"
                label="Content Brand"
                tokenName="content-brand"
                hexCode={mapped.primary.default}
              />
              <ColorBlock
                colorClass="bg-content-success"
                label="Content Success"
                tokenName="content-success"
                hexCode={mapped.success.default}
              />
              <ColorBlock
                colorClass="bg-content-error"
                label="Content Error"
                tokenName="content-error"
                hexCode={mapped.error.default}
              />
              <ColorBlock
                colorClass="bg-content-caution"
                label="Content Caution"
                tokenName="content-caution"
                hexCode={mapped.caution.default}
              />
              <ColorBlock
                colorClass="bg-content-disabled"
                label="Content Disabled"
                tokenName="content-disabled"
                hexCode={mapped.neutral.light}
              />
            </div>
          </SectionCard>

          {/* Border Colors */}
          <SectionCard title="Border Colors">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <ColorBlock
                colorClass="border-primary"
                label="Border Primary"
                tokenName="border-primary"
                hexCode={mapped.neutral.light}
                isBorder
              />
              <ColorBlock
                colorClass="border-secondary"
                label="Border Secondary"
                tokenName="border-secondary"
                hexCode={mapped.neutral.default}
                isBorder
              />
              <ColorBlock
                colorClass="border-tertiary"
                label="Border Tertiary"
                tokenName="border-tertiary"
                hexCode={mapped.neutral.white}
                isBorder
              />
              <ColorBlock
                colorClass="border-active"
                label="Border Active"
                tokenName="border-active"
                hexCode={mapped.neutral.darker}
                isBorder
              />
              <ColorBlock
                colorClass="border-focus"
                label="Border Focus"
                tokenName="border-focus"
                hexCode={mapped.focus.default}
                isBorder
              />
              <ColorBlock
                colorClass="border-success"
                label="Border Success"
                tokenName="border-success"
                hexCode={mapped.success.default}
                isBorder
              />
              <ColorBlock
                colorClass="border-error"
                label="Border Error"
                tokenName="border-error"
                hexCode={mapped.error.default}
                isBorder
              />
              <ColorBlock
                colorClass="border-caution"
                label="Border Caution"
                tokenName="border-caution"
                hexCode={mapped.caution.default}
                isBorder
              />
              <ColorBlock
                colorClass="border-brand"
                label="Border Brand"
                tokenName="border-brand"
                hexCode={mapped.primary.default}
                isBorder
              />
            </div>
          </SectionCard>

          {/* On Colors */}
          <SectionCard title="On Colors">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <ColorBlock
                colorClass="text-on-fill-brand-primary"
                label="On Brand Primary"
                tokenName="on-fill-brand-primary"
                hexCode={mapped.neutral.white}
                bgClass="bg-fill-brand-primary"
              />
              <ColorBlock
                colorClass="text-on-fill-brand-secondary"
                label="On Brand Secondary"
                tokenName="on-fill-brand-secondary"
                hexCode={mapped.neutral.darker}
                bgClass="bg-fill-brand-secondary"
              />
              <ColorBlock
                colorClass="text-on-surface"
                label="On Surface"
                tokenName="on-surface"
                hexCode={mapped.neutral.darker}
                bgClass="bg-surface"
              />
              <ColorBlock
                colorClass="text-on-surface-secondary"
                label="On Surface Secondary"
                tokenName="on-surface-secondary"
                hexCode={mapped.neutral.dark}
                bgClass="bg-surface-secondary"
              />
            </div>
          </SectionCard>
        </div>
      }
    />
  );
};

export default Colors;
