import React, { useState } from "react";
import { UserProfile } from "../components/molecules";
import { Badge } from "../components/atoms";

const Molecules = () => {
  return (
    <div className="space-y-12 p-6">
      {/* User Profile */}
      <div className="p-6 rounded-lg border border-border bg-surface">
        <h2 className="text-headline-s mb-4">User Profile</h2>
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
                avatarSrc="/images/avatars/TheRock.jpg"
                badge={{ variant: "success" }}
              />
            </div>
          </div>

          <div>
            <h3 className="text-title-s text-content-secondary mb-4">Medium</h3>
            <div className="max-w-sm">
              <UserProfile
                size="medium"
                name="The Rock"
                role="Editor"
                avatarSrc="/images/avatars/TheRock.jpg"
                badge={{ variant: "edit" }}
              />
            </div>
          </div>

          <div>
            <h3 className="text-title-s text-content-secondary mb-4">Small</h3>
            <div className="max-w-sm">
              <UserProfile
                size="small"
                name="Rocky Maivia"
                role="Viewer"
                avatarSrc="/images/avatars/TheRock.jpg"
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
                avatarSrc="/images/avatars/TheRock.jpg"
                badge={{ variant: "success" }}
              />
              <UserProfile
                size="medium"
                name="The Rock"
                role="Editor"
                avatarSrc="/images/avatars/TheRock.jpg"
                badge={{ variant: "edit" }}
              />
              <UserProfile
                size="medium"
                name="Rocky Maivia"
                role="Viewer"
                avatarSrc="/images/avatars/TheRock.jpg"
                badge={{ variant: "error" }}
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
                avatarSrc="/images/avatars/TheRock.jpg"
              />
              <UserProfile
                size="medium"
                name="The Rock"
                role="Editor"
                avatarSrc="/images/avatars/TheRock.jpg"
              />
              <UserProfile
                size="small"
                name="Rocky Maivia"
                role="Viewer"
                avatarSrc="/images/avatars/TheRock.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Table Row */}

      {/* Form Groups */}
      <div className="p-6 rounded-lg border border-border bg-surface">
        <h2 className="text-headline-s mb-4">Form Groups</h2>
        <div className="space-y-8">{/* Add form group examples here */}</div>
      </div>

      {/* Search Bars */}
      <div className="p-6 rounded-lg border border-border bg-surface">
        <h2 className="text-headline-s mb-4">Search Bars</h2>
        <div className="space-y-8">{/* Add search bar components here */}</div>
      </div>

      {/* Card Components */}
      <div className="p-6 rounded-lg border border-border bg-surface">
        <h2 className="text-headline-s mb-4">Cards</h2>
        <div className="space-y-8">{/* Add card components here */}</div>
      </div>

      {/* List Items */}
      <div className="p-6 rounded-lg border border-border bg-surface">
        <h2 className="text-headline-s mb-4">List Items</h2>
        <div className="space-y-8">{/* Add list item components here */}</div>
      </div>
    </div>
  );
};

export default Molecules;
