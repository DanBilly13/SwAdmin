import React, { useState } from "react";
import {
  IconButton,
  Card,
  SectionCard,
  PageTitle,
  Modal,
  Button,
} from "../components/atoms";
import { ContentContainer } from "../components/atoms/ContentContainer/ContentContainer";
import { MainContentHead } from "../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../components/templates";

const Cards = () => {
  const { toggleDrawer } = useDrawerControl();
  const [basicModalOpen, setBasicModalOpen] = useState(false);
  const [customHeaderModalOpen, setCustomHeaderModalOpen] = useState(false);
  const [actionsModalOpen, setActionsModalOpen] = useState(false);
  const [sizeModalOpen, setSizeModalOpen] = useState(false);

  return (
    <ContentContainer>
      <MainContentHead
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Design System", href: "/components" },
          { label: "Cards", href: "/cards" },
        ]}
        onMenuClick={toggleDrawer}
        actions={[
          {
            label: "View Source",
            onClick: () =>
              window.open(
                "https://github.com/yourusername/SwAdmin/tree/main/src/components/atoms/Card",
                "_blank"
              ),
            leadingIcon: "code",
          },
        ]}
      >
        <PageTitle
          title="Cards"
          description="Container components for grouping related content and actions."
        />
      </MainContentHead>

      <div className="space-y-8">
        <SectionCard title="Basic Cards">
          {/* Basic Card */}
          <div>
            <h3 className="text-title-s text-content-secondary mb-4">
              Basic Card
            </h3>
            <div className="w-[320px]">
              <Card>
                <div className="p-4">
                  <h4 className="text-title-m mb-2">Card Title</h4>
                  <p className="text-body-m text-content-secondary">
                    This is a basic card with some content inside.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* With Actions */}
          <div className="mt-8">
            <h3 className="text-title-s text-content-secondary mb-4">
              With Actions
            </h3>
            <div className="w-[320px]">
              <Card>
                <div className="p-4">
                  <h4 className="text-title-m mb-2">Card with Actions</h4>
                  <p className="text-body-m text-content-secondary mb-4">
                    This card has action buttons below the content.
                  </p>
                  <div className="flex justify-end gap-2">
                    <IconButton icon="close" />
                    <IconButton icon="check" />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Section Cards">
          {/* Basic Section Card */}
          <div>
            <h3 className="text-title-s text-content-secondary mb-4">
              Basic Section Card
            </h3>
            <SectionCard title="Example Section">
              <p className="text-body-m text-content-secondary">
                Section cards are used to group related content under a section
                title. They're commonly used in documentation and settings
                pages.
              </p>
            </SectionCard>
          </div>

          {/* With Actions */}
          <div className="mt-8">
            <h3 className="text-title-s text-content-secondary mb-4">
              With Actions
            </h3>
            <SectionCard
              title="Section with Actions"
              action={<IconButton icon="more_vert" />}
            >
              <p className="text-body-m text-content-secondary">
                Section cards can include action buttons in their header for
                additional functionality.
              </p>
            </SectionCard>
          </div>
        </SectionCard>

        {/* Modal Examples */}
        <SectionCard title="Modals">
          {/* Basic Modal */}
          <div>
            <h3 className="text-title-s text-content-secondary mb-4">
              Basic Modal
            </h3>
            <div className="flex gap-4">
              <Button onClick={() => setBasicModalOpen(true)}>Open Basic Modal</Button>
              <Modal
                isOpen={basicModalOpen}
                onClose={() => setBasicModalOpen(false)}
                title="Basic Modal"
              >
                <p className="text-body-m text-content-secondary">
                  This is a basic modal with a simple title and content. It can be closed
                  using the close button in the top-right corner or by clicking outside
                  the modal.
                </p>
              </Modal>
            </div>
          </div>

          {/* Custom Header Modal */}
          <div className="mt-8">
            <h3 className="text-title-s text-content-secondary mb-4">
              Custom Header
            </h3>
            <div className="flex gap-4">
              <Button onClick={() => setCustomHeaderModalOpen(true)}>
                Open Custom Header Modal
              </Button>
              <Modal
                isOpen={customHeaderModalOpen}
                onClose={() => setCustomHeaderModalOpen(false)}
                title="Custom Header Modal"
                headerContent={
                  <div className="flex items-center gap-2">
                    <IconButton icon="settings" />
                    <span className="text-title-m">Settings</span>
                  </div>
                }
              >
                <p className="text-body-m text-content-secondary">
                  This modal demonstrates a custom header with an icon and styled title.
                  You can customize the header content to match your needs.
                </p>
              </Modal>
            </div>
          </div>

          {/* Modal with Actions */}
          <div className="mt-8">
            <h3 className="text-title-s text-content-secondary mb-4">
              With Actions
            </h3>
            <div className="flex gap-4">
              <Button onClick={() => setActionsModalOpen(true)}>
                Open Modal with Actions
              </Button>
              <Modal
                isOpen={actionsModalOpen}
                onClose={() => setActionsModalOpen(false)}
                title="Confirm Action"
                actions={
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="secondary"
                      onClick={() => setActionsModalOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => {
                        alert("Action confirmed!");
                        setActionsModalOpen(false);
                      }}
                    >
                      Confirm
                    </Button>
                  </div>
                }
              >
                <p className="text-body-m text-content-secondary">
                  This modal includes action buttons in the footer. It's commonly used
                  for confirmation dialogs or forms that require user actions.
                </p>
              </Modal>
            </div>
          </div>

          {/* Different Sizes */}
          <div className="mt-8">
            <h3 className="text-title-s text-content-secondary mb-4">
              Different Sizes
            </h3>
            <div className="flex gap-4">
              <Button onClick={() => setSizeModalOpen(true)}>
                Open Large Modal
              </Button>
              <Modal
                isOpen={sizeModalOpen}
                onClose={() => setSizeModalOpen(false)}
                title="Large Modal"
                size="lg"
                actions={
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="secondary"
                      onClick={() => setSizeModalOpen(false)}
                    >
                      Close
                    </Button>
                  </div>
                }
              >
                <div className="space-y-4">
                  <p className="text-body-m text-content-secondary">
                    This is a large modal that provides more space for content. It's
                    useful when you need to display more information or complex forms.
                  </p>
                </div>
              </Modal>
            </div>
          </div>
        </SectionCard>
      </div>
    </ContentContainer>
  );
};

export default Cards;
