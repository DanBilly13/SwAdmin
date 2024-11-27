import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Radio,
  IconButton,
  NavButton,
  Card,
  SectionCard,
  PageTitle,
} from "../components/atoms";
import { ContentContainer } from "../components/atoms/ContentContainer/ContentContainer";
import { MainContentHead } from "../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../components/templates";
import { Breadcrumb } from "../components/atoms";

const Atoms = () => {
  const { toggleDrawer } = useDrawerControl();
  const [inputValue, setInputValue] = useState("");
  const [radioValue, setRadioValue] = useState("");

  // State for form inputs
  const [username, setUsername] = useState("johndoe");
  const [status, setStatus] = useState("Inactive");
  const [email, setEmail] = useState("invalid-email");
  const [labelValue, setLabelValue] = useState("");
  const [errorValue, setErrorValue] = useState("");
  const [withValue, setWithValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [sizeValue, setSizeValue] = useState("");
  const [smallSizeValue, setSmallSizeValue] = useState("");
  const [smallValue, setSmallValue] = useState("");
  const [largeValue, setLargeValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  return (
    <ContentContainer>
      <MainContentHead
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Design System", href: "/components" },
          { label: "Atoms", href: "/atoms" },
        ]}
        onMenuClick={toggleDrawer}
        actions={[
          {
            label: "View Source",
            onClick: () =>
              window.open(
                "https://github.com/yourusername/SwAdmin/tree/main/src/components/atoms",
                "_blank"
              ),
            leadingIcon: "code",
          },
        ]}
      >
        <PageTitle
          title="Atoms"
          description="Fundamental building blocks of the design system."
        />
      </MainContentHead>

      <div className="space-y-8">
        <SectionCard title="Container Card">
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
          <div>
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

          {/* With Header */}
          <div>
            <h3 className="text-title-s text-content-secondary mb-4">
              With Header
            </h3>
            <div className="w-[320px]">
              <Card>
                <div className="border-b border-border p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-title-m">Card Header</h4>
                    <IconButton icon="more_vert" onClick={() => {}} />
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-body-m text-content-secondary">
                    This card has a header section with an action button.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Spacers">
          <div className="space-y-8">
            {/* Horizontal Spacers */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Horizontal Spacers
              </h3>
              <div className="space-y-4">
                {/* XS - 4px */}
                <div className="flex items-center gap-4">
                  <div className="w-8 h-1 bg-yellow-300 rounded-full" />
                  <div className="text-label-s text-content">xs (4px)</div>
                  <div className="text-body-s text-content-secondary">
                    Used for: Minimal separation between inline elements
                  </div>
                </div>

                {/* SM - 8px */}
                <div className="flex items-center gap-4">
                  <div className="w-8 h-2 bg-yellow-300 rounded-full" />
                  <div className="text-label-s text-content">sm (8px)</div>
                  <div className="text-body-s text-content-secondary">
                    Used for: Tight spacing between related elements
                  </div>
                </div>

                {/* MD - 12px */}
                <div className="flex items-center gap-4">
                  <div className="w-8 h-3 bg-yellow-300 rounded-full" />
                  <div className="text-label-s text-content">md (12px)</div>
                  <div className="text-body-s text-content-secondary">
                    Used for: Default spacing between elements
                  </div>
                </div>

                {/* LG - 16px */}
                <div className="flex items-center gap-4">
                  <div className="w-8 h-4 bg-yellow-300 rounded-full" />
                  <div className="text-label-s text-content">lg (16px)</div>
                  <div className="text-body-s text-content-secondary">
                    Used for: Comfortable spacing between sections
                  </div>
                </div>

                {/* XL - 24px */}
                <div className="flex items-center gap-4">
                  <div className="w-8 h-6 bg-yellow-300 rounded-full" />
                  <div className="text-label-s text-content">xl (24px)</div>
                  <div className="text-body-s text-content-secondary">
                    Used for: Major section breaks
                  </div>
                </div>

                {/* 2XL - 32px */}
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-yellow-300 rounded-full" />
                  <div className="text-label-s text-content">2xl (32px)</div>
                  <div className="text-body-s text-content-secondary">
                    Used for: Large layout spacing
                  </div>
                </div>

                {/* 3XL - 48px */}
                <div className="flex items-center gap-4">
                  <div className="w-8 h-12 bg-yellow-300 rounded-full" />
                  <div className="text-label-s text-content">3xl (48px)</div>
                  <div className="text-body-s text-content-secondary">
                    Used for: Major layout divisions
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Spacers */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Vertical Spacers
              </h3>
              <div className="flex gap-8">
                {/* XS - 4px */}
                <div className="flex flex-col items-center gap-2">
                  <div className="h-8 w-1 bg-yellow-300 rounded-full" />
                  <div className="text-label-s text-content">xs (4px)</div>
                </div>

                {/* SM - 8px */}
                <div className="flex flex-col items-center gap-2">
                  <div className="h-8 w-2 bg-yellow-300 rounded-full" />
                  <div className="text-label-s text-content">sm (8px)</div>
                </div>

                {/* MD - 12px */}
                <div className="flex flex-col items-center gap-2">
                  <div className="h-8 w-3 bg-yellow-300 rounded-full" />
                  <div className="text-label-s text-content">md (12px)</div>
                </div>

                {/* LG - 16px */}
                <div className="flex flex-col items-center gap-2">
                  <div className="h-8 w-4 bg-yellow-300 rounded-full" />
                  <div className="text-label-s text-content">lg (16px)</div>
                </div>
              </div>
            </div>

            {/* Example Usage */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Example Usage
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-300 rounded-sm" />
                    <div className="text-body-s">xs gap</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-yellow-300 rounded-sm" />
                    <div className="text-body-s">md gap</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-yellow-300 rounded-sm" />
                    <div className="text-body-s">lg gap</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionCard>


      </div>
    </ContentContainer>
  );
};

export default Atoms;
