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
            <Avatar size="xsm" />
            <Avatar size="sm" />
            <Avatar size="md" />
            <Avatar size="lg" />
          </div>
        </div>

        {/* With Initials */}
        <div className="mt-8">
          <h3 className="text-title-s text-content-secondary mb-4">
            With Initials
          </h3>
          <div className="flex flex-wrap gap-4 items-center">
            <Avatar size="xsm" name="John Doe" />
            <Avatar size="sm" name="Jane Smith" />
            <Avatar size="md" name="Robert Johnson" />
            <Avatar size="lg" name="Alice Brown" />
          </div>
        </div>

        {/* With Badge */}
        <div className="mt-8">
          <h3 className="text-title-s text-content-secondary mb-4">
            With Badge
          </h3>
          <div className="flex flex-wrap gap-4 items-center">
            <Avatar size="xsm" badge={{ variant: "success" }} />
            <Avatar size="sm" badge={{ variant: "warning" }} />
            <Avatar size="md" badge={{ variant: "error" }} />
            <Avatar size="lg" badge={{ variant: "info" }} />
          </div>
        </div>
      </SectionCard>

      {/* Thumbnails */}
      <SectionCard title="Thumbnails">
        {/* Basic */}
        <div>
          <h3 className="text-title-s text-content-secondary mb-4">Basic</h3>
          <div className="flex items-center gap-4">
            <Thumbnail size="xsm" />
            <Thumbnail size="sm" />
            <Thumbnail size="md" />
            <Thumbnail size="lg" />
          </div>
        </div>

        {/* With Video Indicator */}
        <div className="mt-8">
          <h3 className="text-title-s text-content-secondary mb-4">
            With Video Indicator
          </h3>
          <div className="flex items-center gap-4">
            <Thumbnail size="xsm" isVideo />
            <Thumbnail size="sm" isVideo />
            <Thumbnail size="md" isVideo />
            <Thumbnail size="lg" isVideo />
          </div>
        </div>

        {/* With Icon */}
        <div className="mt-8">
          <h3 className="text-title-s text-content-secondary mb-4">
            With Icon
          </h3>
          <div className="flex items-center gap-4">
            <Thumbnail size="xsm" type="icon" icon="image" />
            <Thumbnail size="sm" type="icon" icon="video_library" />
            <Thumbnail size="md" type="icon" icon="photo_library" />
            <Thumbnail size="lg" type="icon" icon="collections" />
          </div>
        </div>
      </SectionCard>

      {/* Team Badges */}
      <SectionCard title="Team Badges">
        {/* Basic */}
        <div>
          <h3 className="text-title-s text-content-secondary mb-4">Basic</h3>
          <div className="flex items-center gap-4">
            <Thumbnail size="xsm" type="teamBadge" />
            <Thumbnail size="sm" type="teamBadge" />
            <Thumbnail size="md" type="teamBadge" />
            <Thumbnail size="lg" type="teamBadge" />
          </div>
        </div>

        {/* Disabled */}
        <div className="mt-8">
          <h3 className="text-title-s text-content-secondary mb-4">Disabled</h3>
          <div className="flex items-center gap-4">
            <Thumbnail size="xsm" type="teamBadge" disabled />
            <Thumbnail size="sm" type="teamBadge" disabled />
            <Thumbnail size="md" type="teamBadge" disabled />
            <Thumbnail size="lg" type="teamBadge" disabled />
          </div>
        </div>
      </SectionCard>
    </ContentContainer>
  );
};

export default Images;
