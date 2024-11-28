import React from "react";
import { SectionCard, PageTitle } from "../../components/atoms";
import { ContentContainer } from "../../components/atoms/ContentContainer/ContentContainer";
import { MainContentHead } from "../../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../../components/templates";

const Spacers = () => {
  const { toggleDrawer } = useDrawerControl();

  return (
    <ContentContainer>
      <MainContentHead
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Design System", href: "/components" },
          { label: "Spacers", href: "/spacers" },
        ]}
        onMenuClick={toggleDrawer}
        actions={[
          {
            label: "View Source",
            onClick: () =>
              window.open(
                "https://github.com/yourusername/SwAdmin/tree/main/src/components/atoms/Spacer",
                "_blank"
              ),
            leadingIcon: "code",
          },
        ]}
      >
        <PageTitle
          title="Spacers"
          description="Consistent spacing units for maintaining visual hierarchy and rhythm."
        />
      </MainContentHead>

      <div className="space-y-8">
        <SectionCard title="Spacing Scale">
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
          <div className="mt-8">
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
        </SectionCard>

        <SectionCard title="Usage Examples">
          {/* Example Usage */}
          <div>
            <h3 className="text-title-s text-content-secondary mb-4">
              Spacing in Components
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

          {/* Tailwind Classes */}
          <div className="mt-8">
            <h3 className="text-title-s text-content-secondary mb-4">
              Tailwind Classes
            </h3>
            <div className="space-y-2">
              <p className="text-body-m text-content-secondary">
                Use these Tailwind classes to apply consistent spacing:
              </p>
              <ul className="list-disc list-inside space-y-1 text-body-m text-content-secondary">
                <li><code className="text-content">gap-1</code> for 4px (xs)</li>
                <li><code className="text-content">gap-2</code> for 8px (sm)</li>
                <li><code className="text-content">gap-3</code> for 12px (md)</li>
                <li><code className="text-content">gap-4</code> for 16px (lg)</li>
                <li><code className="text-content">gap-6</code> for 24px (xl)</li>
                <li><code className="text-content">gap-8</code> for 32px (2xl)</li>
                <li><code className="text-content">gap-12</code> for 48px (3xl)</li>
              </ul>
            </div>
          </div>
        </SectionCard>
      </div>
    </ContentContainer>
  );
};

export default Spacers;
