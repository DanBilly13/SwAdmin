import React from "react";
import { Link } from "react-router-dom";
import { SectionCard, Button, IconButton } from "../../components/atoms";
import { DesignSystemContentContainerSlots } from "../../components/atoms/ContentContainerSlots/DesignSystemContentContainerSlots";
import { MainContentHead } from "../../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../../components/templates";
import { PageTitle } from "../../components/atoms/PageTitle/PageTitle";
import { CodeBlock } from "../../components/atoms/CodeBlock/CodeBlock";

export const Buttons = () => {
  const { toggleDrawer } = useDrawerControl();

  // Example code snippets
  const primaryButtonCode = `<Button variant="primary">Primary</Button>`;
  const secondaryButtonCode = `<Button variant="secondary">Secondary</Button>`;
  const tertiaryButtonCode = `<Button variant="tertiary">Tertiary</Button>`;

  const buttonSizesCode = `<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>`;

  const buttonWithIconsCode = `<Button variant="primary" leadingIcon="add">Create New</Button>
<Button variant="secondary" leadingIcon="search">Search</Button>
<Button variant="tertiary" leadingIcon="settings">Settings</Button>`;

  const buttonStatesCode = `<Button disabled>Disabled</Button>
<Button fullWidth>Full Width</Button>`;

  const buttonAsLinkCode = `<Button
  as={Link}
  to="/components"
  variant="secondary"
  leadingIcon="arrow_forward"
>
  View Components
</Button>`;

  const iconButtonCode = `<IconButton icon="open_in_new" onClick={() => {}} />
<IconButton icon="more_vert" onClick={() => {}} />
<IconButton icon="search" onClick={() => {}} />`;

  const iconButtonWithMenuCode = `<IconButton
  icon="more_vert"
  menuOptions={[
    { value: "edit", label: "Edit" },
    { value: "delete", label: "Delete" },
    { value: "archive", label: "Archive" },
  ]}
  menuType="action"
  onClick={() => {}}
/>`;

  return (
    <DesignSystemContentContainerSlots
      header={
        <>
          <MainContentHead
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "Design System", href: "/components" },
              { label: "Buttons", href: "/buttons" },
            ]}
            onMenuClick={toggleDrawer}
            actions={[
              {
                label: "View Source",
                onClick: () =>
                  window.open(
                    "https://github.com/yourusername/SwAdmin/tree/main/src/components/atoms/Button",
                    "_blank"
                  ),
                leadingIcon: "code",
              },
            ]}
          />
          <PageTitle
            title="Buttons"
            description="Composite components built from atomic elements."
          />
        </>
      }
      content={
        <div className="space-y-8 pb-8">
          <SectionCard title="Basic Buttons">
            {/* Variants */}
            <div className="space-y-6">
              <div>
                <h3 className="text-title-s text-content-secondary mb-4">
                  Variants
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="tertiary">Tertiary</Button>
                </div>
                <div className="mt-4 space-y-4">
                  <CodeBlock code={primaryButtonCode} language="jsx" />
                  <CodeBlock code={secondaryButtonCode} language="jsx" />
                  <CodeBlock code={tertiaryButtonCode} language="jsx" />
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="text-title-s text-content-secondary mb-4">Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="small">Small</Button>
                  <Button size="medium">Medium</Button>
                  <Button size="large">Large</Button>
                </div>
                <div className="mt-4">
                  <CodeBlock code={buttonSizesCode} language="jsx" />
                </div>
              </div>

              {/* With Icons */}
              <div>
                <h3 className="text-title-s text-content-secondary mb-4">
                  With Icons
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" leadingIcon="add">
                    Create New
                  </Button>
                  <Button variant="secondary" leadingIcon="search">
                    Search
                  </Button>
                  <Button variant="tertiary" leadingIcon="settings">
                    Settings
                  </Button>
                </div>
                <div className="mt-4">
                  <CodeBlock code={buttonWithIconsCode} language="jsx" />
                </div>
              </div>

              {/* States */}
              <div>
                <h3 className="text-title-s text-content-secondary mb-4">States</h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <Button disabled>Disabled</Button>
                    <Button fullWidth>Full Width</Button>
                  </div>
                  <div className="flex flex-wrap gap-4 items-center">
                    <div className="text-label-s text-content-secondary">
                      Hover and Active states:
                    </div>
                    <Button variant="primary">Hover me</Button>
                    <Button variant="secondary">Hover me</Button>
                    <Button variant="tertiary">Hover me</Button>
                  </div>
                </div>
                <div className="mt-4">
                  <CodeBlock code={buttonStatesCode} language="jsx" />
                </div>
              </div>

              {/* As Link */}
              <div>
                <h3 className="text-title-s text-content-secondary mb-4">
                  As Link
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button
                    as={Link}
                    to="/components"
                    variant="secondary"
                    leadingIcon="arrow_forward"
                  >
                    View Components
                  </Button>
                </div>
                <div className="mt-4">
                  <CodeBlock code={buttonAsLinkCode} language="jsx" />
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Icon Buttons">
            {/* Basic Icons */}
            <div className="space-y-6">
              <div>
                <h3 className="text-title-s text-content-secondary mb-4">
                  Basic Icons
                </h3>
                <div className="flex flex-wrap gap-4">
                  <IconButton icon="open_in_new" onClick={() => {}} />
                  <IconButton icon="more_vert" onClick={() => {}} />
                  <IconButton icon="search" onClick={() => {}} />
                </div>
                <div className="mt-4">
                  <CodeBlock code={iconButtonCode} language="jsx" />
                </div>
              </div>

              {/* With Menu */}
              <div>
                <h3 className="text-title-s text-content-secondary mb-4">
                  With Menu
                </h3>
                <div className="flex flex-wrap gap-4">
                  <IconButton
                    icon="more_vert"
                    menuOptions={[
                      { value: "edit", label: "Edit" },
                      { value: "delete", label: "Delete" },
                      { value: "archive", label: "Archive" },
                    ]}
                    menuType="action"
                    onClick={() => {}}
                  />
                </div>
                <div className="mt-4">
                  <CodeBlock code={iconButtonWithMenuCode} language="jsx" />
                </div>
              </div>

              {/* States */}
              <div>
                <h3 className="text-title-s text-content-secondary mb-4">States</h3>
                <div className="flex flex-wrap gap-4">
                  <IconButton icon="open_in_new" onClick={() => {}} disabled />
                  <IconButton
                    icon="more_vert"
                    menuOptions={[
                      { value: "edit", label: "Edit" },
                      { value: "delete", label: "Delete" },
                    ]}
                    menuType="action"
                    onClick={() => {}}
                    disabled
                  />
                </div>
              </div>
            </div>
          </SectionCard>
        </div>
      }
    />
  );
};

export default Buttons;
