import React from "react";
import { SectionCard, NavButton, Breadcrumb } from "../components/atoms";
import { ContentContainer } from "../components/atoms/ContentContainer/ContentContainer";
import { MainContentHead } from "../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../components/templates";
import { PageTitle } from "../components/atoms/PageTitle/PageTitle";

export const Navigation = () => {
  const { toggleDrawer } = useDrawerControl();

  return (
    <ContentContainer>
      <MainContentHead
        breadcrumbs={[
          { label: "Components", href: "/components" },
          { label: "Navigation", href: "/navigation" },
        ]}
        actions={[
          {
            label: "View Source",
            onClick: () =>
              window.open(
                "https://github.com/yourusername/SwAdmin/tree/main/src/components/atoms/Navigation",
                "_blank"
              ),
            leadingIcon: "code",
          },
        ]}
      >
        <PageTitle
          title="Navigation"
          description="Composite components built from atomic elements."
        />
      </MainContentHead>

      <div className="space-y-8 pb-8">
        <SectionCard title="Breadcrumbs">
          {/* Basic */}
          <div>
            <h3 className="text-title-s text-content-secondary mb-4">Basic</h3>
            <div className="flex flex-col gap-4">
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Components", href: "/components" },
                  { label: "Navigation", href: "/navigation" },
                ]}
              />
            </div>
          </div>

          {/* Long Path */}
          <div>
            <h3 className="text-title-s text-content-secondary mb-4">
              Long Path
            </h3>
            <div className="flex flex-col gap-4">
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Documents", href: "/documents" },
                  { label: "Projects", href: "/documents/projects" },
                  { label: "2024", href: "/documents/projects/2024" },
                  { label: "Q1", href: "/documents/projects/2024/q1" },
                  {
                    label: "Project Report",
                    href: "/documents/projects/2024/q1/report",
                  },
                ]}
                maxItems={4}
              />
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Navigation Buttons">
          {/* Basic */}
          <div>
            <h3 className="text-title-s text-content-secondary mb-4">Basic</h3>
            <div className="flex flex-col w-[240px] gap-2">
              <NavButton to="/dashboard" icon="dashboard">
                Dashboard
              </NavButton>
              <NavButton to="/profile" icon="person">
                Profile
              </NavButton>
              <NavButton to="/settings" icon="settings">
                Settings
              </NavButton>
            </div>
          </div>

          {/* States */}
          <div>
            <h3 className="text-title-s text-content-secondary mb-4">States</h3>
            <div className="flex flex-col w-[240px] gap-2">
              <NavButton
                to="/dashboard"
                icon="dashboard"
                className="opacity-50 pointer-events-none"
              >
                Disabled State
              </NavButton>
              <NavButton to="/active" icon="check_circle">
                Active State
              </NavButton>
            </div>
          </div>

          {/* With Badge */}
          <div>
            <h3 className="text-title-s text-content-secondary mb-4">
              With Badge
            </h3>
            <div className="flex flex-col w-[240px] gap-2">
              <NavButton
                to="/notifications"
                icon="notifications"
                className="relative"
              >
                Notifications
                <span className="absolute right-2 top-1/2 -translate-y-1/2 min-w-[20px] h-5 rounded-full bg-content-error text-fill-on text-xs flex items-center justify-center px-1">
                  3
                </span>
              </NavButton>
              <NavButton to="/messages" icon="mail" className="relative">
                Messages
                <span className="absolute right-2 top-1/2 -translate-y-1/2 min-w-[20px] h-5 rounded-full bg-content-error text-fill-on text-xs flex items-center justify-center px-1">
                  12
                </span>
              </NavButton>
            </div>
          </div>
        </SectionCard>
      </div>
    </ContentContainer>
  );
};

export default Navigation;
