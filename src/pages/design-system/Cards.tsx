import React from "react";
import { Button, Card, SectionCard, PageTitle } from "../../components/atoms";
import { DesignSystemContentContainerSlots } from "../../components/atoms/ContentContainerSlots/DesignSystemContentContainerSlots";
import { MainContentHead } from "../../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../../components/templates";
import { LinkCard } from "../../components/molecules/LinkCard";
import { IconButton } from "../../components/atoms";
import { Modal } from "../../components/atoms";
import { NotificationsCard } from "../../components/molecules/NotificationsCard";
import { NotificationsCardBasic } from "../../components/molecules/NotificationsCard/NotificationsCardBasic";

const Cards = () => {
  const { toggleDrawer } = useDrawerControl();
  const [basicModalOpen, setBasicModalOpen] = React.useState(false);
  const [customHeaderModalOpen, setCustomHeaderModalOpen] =
    React.useState(false);
  const [actionsModalOpen, setActionsModalOpen] = React.useState(false);
  const [sizeModalOpen, setSizeModalOpen] = React.useState(false);

  return (
    <DesignSystemContentContainerSlots
      header={
        <>
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
          />
          <PageTitle
            title="Cards"
            description="Container components for grouping related content and actions."
          />
        </>
      }
      content={
        <div className="space-y-8">
          <SectionCard title="Link Cards">
            <div className="space-y-6">
              <div>
                <h3 className="text-title-s text-on-surface-secondar mb-4">
                  Basic Link Card
                </h3>
                <div className="w-[320px]">
                  <LinkCard
                    title="Example Card"
                    description="This is a link card that navigates to another page when clicked."
                    to="/cards"
                    variant="primary"
                    icon={""}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-title-s text-on-surface-secondar mb-4">
                  Link Card with Buttons
                </h3>
                <div className="w-[320px]">
                  <LinkCard
                    title="Interactive Card"
                    description="This card includes action buttons that can navigate to different routes."
                    to="/cards"
                    variant="secondary"
                    icon={""}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-title-s text-on-surface-secondar mb-4">
                  Card Variants
                </h3>
                <div className="grid grid-cols-2 gap-4 w-full max-w-[660px]">
                  <LinkCard
                    title="Primary Variant"
                    description="Uses primary color scheme"
                    to="/cards"
                    variant="primary"
                    icon={""}
                  />
                  <LinkCard
                    title="Secondary Variant"
                    description="Uses secondary color scheme"
                    to="/cards"
                    variant="secondary"
                    icon={""}
                  />
                  <LinkCard
                    title="Success Variant"
                    description="Uses success color scheme"
                    to="/cards"
                    variant="success"
                    icon={""}
                  />
                  <LinkCard
                    title="Warning Variant"
                    description="Uses warning color scheme"
                    to="/cards"
                    variant="warning"
                    icon={""}
                  />
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Basic Cards">
            {/* Basic Card */}
            <div>
              <h3 className="text-title-s text-on-surface-secondar mb-4">
                Basic Card
              </h3>
              <div className="w-[320px]">
                <Card>
                  <div className="p-4">
                    <h4 className="text-title-m mb-2">Card Title</h4>
                    <p className="text-body-m text-on-surface-secondar">
                      This is a basic card with some content inside.
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            {/* With Actions */}
            <div className="mt-8">
              <h3 className="text-title-s text-on-surface-secondar mb-4">
                With Actions
              </h3>
              <div className="w-[320px]">
                <Card>
                  <div className="p-4">
                    <h4 className="text-title-m mb-2">Card with Actions</h4>
                    <p className="text-body-m text-on-surface-secondar mb-4">
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
              <h3 className="text-title-s text-on-surface-secondar mb-4">
                Basic Section Card
              </h3>
              <SectionCard title="Example Section">
                <p className="text-body-m text-on-surface-secondar">
                  Section cards are used to group related content under a
                  section title. They're commonly used in documentation and
                  settings pages.
                </p>
              </SectionCard>
            </div>

            {/* With Actions */}
            <div className="mt-8">
              <h3 className="text-title-s text-on-surface-secondar mb-4">
                With Actions
              </h3>
              <SectionCard
                title="Section with Actions"
                action={<IconButton icon="more_vert" />}
              >
                <p className="text-body-m text-on-surface-secondar">
                  Section cards can include action buttons in their header for
                  additional functionality.
                </p>
              </SectionCard>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-title-s text-content-secondary mb-4">
                  Basic Section Card
                </h3>
                <SectionCard 
                  title="Card Title" 
                  description="Optional description text that provides more context about the section."
                >
                  <div className="h-32 flex items-center justify-center border border-secondary rounded-lg">
                    Card Content
                  </div>
                </SectionCard>
              </div>

              <div>
                <h3 className="text-title-s text-content-secondary mb-4">
                  With Action
                </h3>
                <SectionCard 
                  title="Card with Action" 
                  description="Cards can include both a description and an action button."
                  action={
                    <Button variant="secondary" size="small">
                      Action
                    </Button>
                  }
                >
                  <div className="h-32 flex items-center justify-center border border-secondary rounded-lg">
                    Card Content
                  </div>
                </SectionCard>
              </div>
            </div>
          </SectionCard>

          {/* Modal Examples */}
          <SectionCard title="Modals">
            {/* Basic Modal */}
            <div>
              <h3 className="text-title-s text-on-surface-secondar mb-4">
                Basic Modal
              </h3>
              <div className="flex gap-4">
                <Button onClick={() => setBasicModalOpen(true)}>
                  Open Basic Modal
                </Button>
                <Modal
                  isOpen={basicModalOpen}
                  onClose={() => setBasicModalOpen(false)}
                  title="Basic Modal"
                  description="Hantera åtkomstnivåer och behörigheter för denna roll i Min Fotboll."
                >
                  <p className="text-body-m text-on-surface-secondar">
                    This is a basic modal with a simple title and content. It
                    can be closed using the close button in the top-right corner
                    or by clicking outside the modal.
                  </p>
                </Modal>
              </div>
            </div>

            {/* Custom Header Modal */}
            <div className="mt-8">
              <h3 className="text-title-s text-on-surface-secondar mb-4">
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
                  description="Hantera åtkomstnivåer och behörigheter för denna roll i Min Fotboll."
                  headerContent={
                    <div className="flex items-center gap-2">
                      <IconButton icon="settings" />
                      <span className="text-title-m">Settings</span>
                    </div>
                  }
                >
                  <p className="text-body-m text-on-surface-secondar">
                    This modal demonstrates a custom header with an icon and
                    styled title. You can customize the header content to match
                    your needs.
                  </p>
                </Modal>
              </div>
            </div>

            {/* Modal with Actions */}
            <div className="mt-8">
              <h3 className="text-title-s text-on-surface-secondar mb-4">
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
                  actions={{
                    right: [
                      <div
                        className="flex justify-end gap-2"
                        key="modal-actions"
                      >
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
                      </div>,
                    ],
                  }}
                >
                  <p className="text-body-m text-on-surface-secondar">
                    This modal includes action buttons in the footer. It's
                    commonly used for confirmation dialogs or forms that require
                    user actions.
                  </p>
                </Modal>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Notifications Card">
            <div className="space-y-6">
              <div>
                <h3 className="text-title-s text-on-surface-secondar mb-4">
                  Stacked Notifications Card
                </h3>
                <div className="space-y-4">
                  <NotificationsCard
                    icon="warning"
                    title="Default Border"
                    description="Standard notification with default border"
                    date="2 hours ago"
                    variant="stacked"
                  />
                  <NotificationsCard
                    icon="warning"
                    title="Caution Border"
                    description="Notification with caution border"
                    date="2 hours ago"
                    variant="stacked"
                    borderVariant="caution"
                  />
                  <NotificationsCard
                    icon="error"
                    title="Error Border"
                    description="Notification with error border"
                    date="2 hours ago"
                    variant="stacked"
                    borderVariant="error"
                  />
                  <NotificationsCard
                    icon="check_circle"
                    title="Success Border"
                    description="Notification with success border"
                    date="2 hours ago"
                    variant="stacked"
                    borderVariant="success"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-title-s text-on-surface-secondar mb-4">
                  Inline Notifications Card
                </h3>
                <div className="space-y-4">
                  <NotificationsCard
                    icon="warning"
                    title="Default Border"
                    description="Standard notification with default border"
                    date="2 hours ago"
                    variant="inline"
                  />
                  <NotificationsCard
                    icon="warning"
                    title="Caution Border"
                    description="Notification with caution border"
                    date="2 hours ago"
                    variant="inline"
                    borderVariant="caution"
                  />
                  <NotificationsCard
                    icon="error"
                    title="Error Border"
                    description="Notification with error border"
                    date="2 hours ago"
                    variant="inline"
                    borderVariant="error"
                  />
                  <NotificationsCard
                    icon="check_circle"
                    title="Success Border"
                    description="Notification with success border"
                    date="2 hours ago"
                    variant="inline"
                    borderVariant="success"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-title-s text-on-surface-secondar mb-4">
                  Basic Notifications Card
                </h3>
                <div className="space-y-4">
                  <NotificationsCardBasic
                    icon="warning"
                    title="Default Border"
                    description="Standard notification with default border"
                    date="2 hours ago"
                  />
                  <NotificationsCardBasic
                    icon="warning"
                    title="Caution Border"
                    description="Notification with caution border"
                    date="2 hours ago"
                    borderVariant="caution"
                  />
                  <NotificationsCardBasic
                    icon="error"
                    title="Error Border"
                    description="Notification with error border"
                    date="2 hours ago"
                    borderVariant="error"
                  />
                  <NotificationsCardBasic
                    icon="check_circle"
                    title="Success Border"
                    description="Notification with success border"
                    date="2 hours ago"
                    borderVariant="success"
                  />
                  <NotificationsCardBasic
                    icon="info"
                    title="No Border"
                    description="Notification without border"
                    date="2 hours ago"
                    showBorder={false}
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

export default Cards;
