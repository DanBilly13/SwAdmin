import React from "react";
import { Avatar, Thumbnail, SectionCard, PageTitle } from "../components/atoms";
import { ContentContainer } from "../components/atoms/ContentContainer/ContentContainer";
import { MainContentHead } from "../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../components/templates";

const Images = () => {
  const { toggleDrawer } = useDrawerControl();

  return (
    <ContentContainer>
      <MainContentHead
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Design System", href: "/components" },
          { label: "Images", href: "/images" },
        ]}
        onMenuClick={toggleDrawer}
        actions={[
          {
            label: "View Source",
            onClick: () =>
              window.open(
                "https://github.com/yourusername/SwAdmin/tree/main/src/components/atoms/Avatar",
                "_blank"
              ),
          },
        ]}
      >
        <PageTitle
          title="Images"
          description="Form controls and input components for collecting user data."
        />
      </MainContentHead>

      {/* Avatars */}
      <SectionCard title="Avatars">
        {/* Basic */}
        <div>
          <h3 className="text-title-s text-content-secondary mb-4">Basic</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <Avatar size="tiny" />
            <Avatar size="small" />
            <Avatar size="medium" />
            <Avatar size="large" />
          </div>
        </div>

        {/* With Initials */}
        <div className="mt-8">
          <h3 className="text-title-s text-content-secondary mb-4">
            With Initials
          </h3>
          <div className="flex flex-wrap gap-4 items-center">
            <Avatar size="tiny" name="John Doe" />
            <Avatar size="small" name="Jane Smith" />
            <Avatar size="medium" name="Robert Johnson" />
            <Avatar size="large" name="Alice Brown" />
          </div>
        </div>

        {/* With Badge */}
        <div className="mt-8">
          <h3 className="text-title-s text-content-secondary mb-4">
            With Badge
          </h3>
          <div className="flex flex-wrap gap-4 items-center">
            <Avatar size="tiny" badge={{ variant: "success" }} />

            <Avatar size="medium" badge={{ variant: "error" }} />
          </div>
        </div>
      </SectionCard>

      {/* Thumbnails */}
      <SectionCard title="Thumbnails">
        {/* Basic */}
        <div>
          <h3 className="text-title-s text-content-secondary mb-4">Basic</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <Thumbnail size="tiny" />
            <Thumbnail size="small" />
            <Thumbnail size="medium" />
            <Thumbnail size="large" />
          </div>
        </div>

        {/* With Video Indicator */}
        <div className="mt-8">
          <h3 className="text-title-s text-content-secondary mb-4">
            With Video Indicator
          </h3>
          <div className="flex flex-wrap gap-4 items-center">
            <Thumbnail size="tiny" isVideo />
            <Thumbnail size="small" isVideo />
            <Thumbnail size="medium" isVideo />
            <Thumbnail size="large" isVideo />
          </div>
        </div>

        {/* With Icon */}
        <div className="mt-8">
          <h3 className="text-title-s text-content-secondary mb-4">
            With Icon
          </h3>
          <div className="flex flex-wrap gap-4 items-center">
            <Thumbnail size="tiny" type="icon" icon="image" />
            <Thumbnail size="small" type="icon" icon="video_library" />
            <Thumbnail size="medium" type="icon" icon="photo_library" />
            <Thumbnail size="large" type="icon" icon="collections" />
          </div>
        </div>
      </SectionCard>

      {/* Team Badges */}
      <SectionCard title="Team Badges">
        {/* Basic */}
        <div>
          <h3 className="text-title-s text-content-secondary mb-4">Basic</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <Thumbnail size="tiny" type="teamBadge" />
            <Thumbnail size="small" type="teamBadge" />
            <Thumbnail size="medium" type="teamBadge" />
            <Thumbnail size="large" type="teamBadge" />
          </div>
        </div>

        {/* Disabled */}
        <div className="mt-8">
          <h3 className="text-title-s text-content-secondary mb-4">Disabled</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <Thumbnail size="tiny" type="teamBadge" disabled />
            <Thumbnail size="small" type="teamBadge" disabled />
            <Thumbnail size="medium" type="teamBadge" disabled />
            <Thumbnail size="large" type="teamBadge" disabled />
          </div>
        </div>
      </SectionCard>
    </ContentContainer>
  );
};

export default Images;
