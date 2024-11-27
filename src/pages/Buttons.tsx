import React from "react";
import { Link } from "react-router-dom";
import { SectionCard, Button, IconButton } from "../components/atoms";
import { ContentContainer } from "../components/atoms/ContentContainer/ContentContainer";
import { MainContentHead } from "../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from '../components/templates';
import { PageTitle } from '../components/atoms/PageTitle/PageTitle';

export const Buttons = () => {
  const { toggleDrawer } = useDrawerControl();

  return (
    <ContentContainer>
      <MainContentHead
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Design System", href: "/components" },
          { label: "Buttons", href: "/buttons" },
        ]}
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
      >
        <PageTitle
          title="Buttons"
          description="Composite components built from atomic elements."
        />
      </MainContentHead>

      <div className="space-y-8 pb-8">
        <SectionCard title="Basic Buttons">
          {/* Variants */}
          <div>
            <h3 className="text-title-s text-content-secondary mb-4">
              Variants
            </h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="tertiary">Tertiary</Button>
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
          </div>
        </SectionCard>

        <SectionCard title="Icon Buttons">
          {/* Basic Icons */}
          <div>
            <h3 className="text-title-s text-content-secondary mb-4">
              Basic Icons
            </h3>
            <div className="flex flex-wrap gap-4">
              <IconButton icon="open_in_new" onClick={() => {}} />
              <IconButton icon="more_vert" onClick={() => {}} />
              <IconButton icon="search" onClick={() => {}} />
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
        </SectionCard>
      </div>
    </ContentContainer>
  );
};

export default Buttons;
