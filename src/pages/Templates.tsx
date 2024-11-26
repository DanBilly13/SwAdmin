import React from 'react';
import { GridWithNav } from '../components/templates';
import { Button } from '../components/atoms';

const Templates = () => {
  // Example navigation content
  const navigationContent = (
    <div className="p-4 space-y-2">
      <h2 className="text-headline-s mb-6">Navigation</h2>
      <Button
        variant="tertiary"
        className="w-full justify-start"
        leadingIcon="home"
      >
        Dashboard
      </Button>
      <Button
        variant="tertiary"
        className="w-full justify-start"
        leadingIcon="person"
      >
        Profile
      </Button>
      <Button
        variant="tertiary"
        className="w-full justify-start"
        leadingIcon="settings"
      >
        Settings
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-bg">
      <h1 className="text-headline-l p-6 text-content-primary">Templates</h1>

      {/* Grid with Navigation Template */}
      <section className="mb-12">
        <h2 className="text-headline-s mb-8 px-6 text-content-primary">
          Grid with Navigation
        </h2>

        {/* Template Demo */}
        <div className="border border-border rounded-lg overflow-hidden">
          <GridWithNav navigation={navigationContent}>
            <div className="p-6">
              <h3 className="text-title-l mb-4">Main Content Area</h3>
              <p className="text-body-l text-content-secondary mb-4">
                This is the main content area that spans 10 columns on desktop and full width on mobile.
                The navigation on the left takes up 2 columns on desktop and becomes full width on mobile.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-surface p-4 rounded-lg border border-border">
                  <span className="text-body-m">Content Block 1</span>
                </div>
                <div className="bg-surface p-4 rounded-lg border border-border">
                  <span className="text-body-m">Content Block 2</span>
                </div>
                <div className="bg-surface p-4 rounded-lg border border-border">
                  <span className="text-body-m">Content Block 3</span>
                </div>
              </div>
            </div>
          </GridWithNav>
        </div>
      </section>
    </div>
  );
};

export default Templates;
