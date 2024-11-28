import React, { useState } from "react";
import { ContentContainer } from "../../components/atoms/ContentContainer/ContentContainer";
import { SectionCard } from "../../components/atoms/SectionCard/SectionCard";
import { Card } from "../../components/atoms/Card/Card";
import { MainContentHead } from "../../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../../components/templates";
import { PageTitle } from "../../components/atoms/PageTitle/PageTitle";
import {
  UserProfile,
  TeamProfile,
  FilterAndSearch,
} from "../../components/molecules";
import { getAssetPath } from "../../utils/paths";

const Molecules = () => {
  const { toggleDrawer } = useDrawerControl();
  const [searchValue, setSearchValue] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");

  return (
    <ContentContainer>
      <MainContentHead
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Design System", href: "/components" },
          { label: "Molecules", href: "/molecules" },
        ]}
        onMenuClick={toggleDrawer}
        actions={[
          {
            label: "View Source",
            onClick: () =>
              window.open(
                "https://github.com/yourusername/SwAdmin/tree/main/src/components/molecules",
                "_blank"
              ),
            leadingIcon: "code",
          },
        ]}
      >
        <PageTitle
          title="Molecules"
          description="Composite components built from atomic elements."
        />
      </MainContentHead>

      <div className="space-y-8">
        {/* Filter and Search */}
        <SectionCard title="Filter and Search">
          <FilterAndSearch
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            filters={[
              {
                label: "Status",
                value: statusFilter,
                onChange: setStatusFilter,
                options: [
                  { label: "All", value: "all" },
                  { label: "Active", value: "active" },
                  { label: "Inactive", value: "inactive" },
                  { label: "Pending", value: "pending" },
                ],
              },
              {
                label: "Type",
                value: typeFilter,
                onChange: setTypeFilter,
                options: [
                  { label: "All", value: "all" },
                  { label: "User", value: "user" },
                  { label: "Admin", value: "admin" },
                  { label: "Guest", value: "guest" },
                ],
              },
              {
                label: "Role",
                value: roleFilter,
                onChange: setRoleFilter,
                options: [
                  { label: "All", value: "all" },
                  { label: "Owner", value: "owner" },
                  { label: "Editor", value: "editor" },
                  { label: "Viewer", value: "viewer" },
                ],
              },
            ]}
          />
          <div className="mt-4 text-content-secondary">
            <p>Selected Filters:</p>
            <p>
              Status: {statusFilter}, Type: {typeFilter}, Role: {roleFilter}
            </p>
            <p>Search: {searchValue || "(empty)"}</p>
          </div>
        </SectionCard>

        {/* User Profile */}
        <SectionCard title="User Profile">
          <div className="space-y-8">
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Large (Default)
              </h3>
              <div className="max-w-sm">
                <UserProfile
                  size="large"
                  name="Dwayne Johnson"
                  role="Administrator"
                  avatarSrc={getAssetPath("/images/avatars/TheRock.jpg")}
                  badge={{ variant: "success" }}
                />
              </div>
            </div>

            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Medium
              </h3>
              <div className="max-w-sm">
                <UserProfile
                  size="medium"
                  name="The Rock"
                  role="Editor"
                  avatarSrc={getAssetPath("/images/avatars/TheRock.jpg")}
                  badge={{ variant: "warning" }}
                />
              </div>
            </div>

            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Small
              </h3>
              <div className="max-w-sm">
                <UserProfile
                  size="small"
                  name="Rocky Maivia"
                  role="Viewer"
                  avatarSrc={getAssetPath("/images/avatars/TheRock.jpg")}
                  badge={{ variant: "error" }}
                />
              </div>
            </div>

            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Badge Variants
              </h3>
              <div className="flex flex-col gap-6 p-4 bg-surface/20 rounded-lg">
                <UserProfile
                  size="medium"
                  name="Dwayne Johnson"
                  role="Administrator"
                  avatarSrc={getAssetPath("/images/avatars/TheRock.jpg")}
                  badge={{ variant: "success" }}
                />
                <UserProfile
                  size="medium"
                  name="The Rock"
                  role="Editor"
                  avatarSrc={getAssetPath("/images/avatars/TheRock.jpg")}
                  badge={{ variant: "info" }}
                />
                <UserProfile
                  size="medium"
                  name="Rocky Maivia"
                  role="Viewer"
                  avatarSrc={getAssetPath("/images/avatars/TheRock.jpg")}
                  badge={{ variant: "neutral" }}
                />
              </div>
            </div>

            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Size Comparison
              </h3>
              <div className="flex flex-col gap-6 p-4 bg-surface/20 rounded-lg">
                <UserProfile
                  size="large"
                  name="Dwayne Johnson"
                  role="Administrator"
                  avatarSrc={getAssetPath("/images/avatars/TheRock.jpg")}
                />
                <UserProfile
                  size="medium"
                  name="The Rock"
                  role="Editor"
                  avatarSrc={getAssetPath("/images/avatars/TheRock.jpg")}
                />
                <UserProfile
                  size="small"
                  name="Rocky Maivia"
                  role="Viewer"
                  avatarSrc={getAssetPath("/images/avatars/TheRock.jpg")}
                />
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Team Profile */}
        <SectionCard title="Team Profile">
          <div className="space-y-8">
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Large (Default)
              </h3>
              <div className="max-w-sm">
                <TeamProfile
                  size="large"
                  name="IFK Stockholm"
                  division="Division 1"
                  badgeSrc={getAssetPath("/images/team-badges/IFK-Stockholm.png")}
                />
              </div>
            </div>

            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Medium
              </h3>
              <div className="max-w-sm">
                <TeamProfile
                  size="medium"
                  name="Umeå FC"
                  division="Division 2"
                  badgeSrc={getAssetPath("/images/team-badges/UmeaFC.jpg")}
                />
              </div>
            </div>

            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Small
              </h3>
              <div className="max-w-sm">
                <TeamProfile
                  size="small"
                  name="Djurgårdens IF"
                  division="Allsvenskan"
                  badgeSrc={getAssetPath("/images/team-badges/DIF.png")}
                />
              </div>
            </div>
          </div>
        </SectionCard>

        {/* MainContentHead */}
        <SectionCard title="Main Content Head">
          <Card>
            <div className="space-y-4">
              <MainContentHead
                breadcrumbs={[
                  { label: "Home", href: "/" },
                  { label: "Design System", href: "/design" },
                  { label: "Molecules", href: "/molecules" },
                ]}
                actions={[
                  {
                    label: "Edit",
                    onClick: () => console.log("Edit clicked"),
                    leadingIcon: "edit",
                  },
                  {
                    label: "Settings",
                    onClick: () => console.log("Settings clicked"),
                    leadingIcon: "settings",
                  },
                ]}
              />
              <MainContentHead
                breadcrumbs={[
                  { label: "Home", href: "/" },
                  { label: "Teams", href: "/teams" },
                  { label: "Svenska FF", href: "/teams/svff" },
                ]}
                actions={[
                  {
                    label: "Add Player",
                    onClick: () => console.log("Add player clicked"),
                    leadingIcon: "person_add",
                  },
                  {
                    label: "Export",
                    onClick: () => console.log("Export clicked"),
                    leadingIcon: "download",
                  },
                ]}
              />
            </div>
          </Card>
        </SectionCard>

        {/* Table Row */}

        {/* Form Groups */}
        <SectionCard title="Form Groups">
          <div className="space-y-8">{/* Add form group examples here */}</div>
        </SectionCard>

        {/* Search Bars */}
        <SectionCard title="Search Bars">
          <div className="space-y-8">
            {/* Add search bar components here */}
          </div>
        </SectionCard>

        {/* Card Components */}
        <SectionCard title="Cards">
          <div className="space-y-8">{/* Add card components here */}</div>
        </SectionCard>

        {/* List Items */}
        <SectionCard title="List Items">
          <div className="space-y-8">{/* Add list item components here */}</div>
        </SectionCard>
      </div>
    </ContentContainer>
  );
};

export default Molecules;
