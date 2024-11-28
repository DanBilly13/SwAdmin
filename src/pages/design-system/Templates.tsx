import React from 'react';
import { useDrawerControl } from '../../components/templates';
import { Button } from '../../components/atoms';
import { ContentContainer } from '../../components/atoms/ContentContainer/ContentContainer';
import { MainContentHead } from '../../components/molecules/MainContentHead/MainContentHead';
import { PageTitle } from '../../components/atoms/PageTitle/PageTitle';

const Templates = () => {
  const { toggleDrawer } = useDrawerControl();

  return (
    <ContentContainer>
      <MainContentHead
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Design System", href: "/components" },
          { label: "Templates", href: "/templates" },
        ]}
        actions={[
          {
            label: "View Source",
            onClick: () =>
              window.open(
                "https://github.com/yourusername/SwAdmin/tree/main/src/components/templates",
                "_blank"
              ),
            leadingIcon: "code",
          },
        ]}
        onMenuClick={toggleDrawer}
      >
        <PageTitle 
          title="Templates" 
          description="Pre-built page layouts and common UI patterns for rapid application development."
        />
      </MainContentHead>
      <div className="min-h-screen bg-bg">
        {/* Grid with Navigation Template */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-headline-m">Grid with Navigation</h2>
            <p className="text-body-l text-on-muted">
              A responsive grid layout with a navigation sidebar that collapses into a drawer on mobile devices.
            </p>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default Templates;
