import React, { useState } from "react";
import {
  Button,
  InlineInput,
  Thumbnail,
  NavButton,
  Chip,
  Badge,
  Dropdown,
  Radio,
  IconButton,
  TableCell,
  Card,
  Avatar,
} from "../components/atoms";
import { Link } from "react-router-dom";

const Atoms = () => {
  // State for form inputs
  const [username, setUsername] = useState("johndoe");
  const [status, setStatus] = useState("Inactive");
  const [email, setEmail] = useState("invalid-email");
  const [basicValue, setBasicValue] = useState("");
  const [labelValue, setLabelValue] = useState("");
  const [errorValue, setErrorValue] = useState("");
  const [withValue, setWithValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [sizeValue, setSizeValue] = useState("");
  const [smallSizeValue, setSmallSizeValue] = useState("");
  const [smallValue, setSmallValue] = useState("");
  const [largeValue, setLargeValue] = useState("");

  return (
    <div className="space-y-12 p-6">
      <div>
        <h1 className="text-headline-l text-content-primary mb-4">Atoms</h1>
        <p className="text-content-secondary mb-8">
          Atomic components are the fundamental building blocks of our design
          system. These are the smallest possible components that are still
          useful on their own.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-border bg-surface">
          <h2 className="text-headline-s mb-4">Buttons</h2>
          <div className="space-y-8">
            {/* Variants */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Variants
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="tertiary">Tertiary</Button>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Sizes
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Large</Button>
              </div>
            </div>

            {/* With Icons */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                With Icons
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" leadingIcon="add">
                  Create New
                </Button>
                <Button variant="secondary" leadingIcon="search">
                  Search
                </Button>
                <Button variant="tertiary" leadingIcon="settings">
                  Settings
                </Button>
              </div>
            </div>

            {/* States */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                States
              </h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Button disabled>Disabled</Button>
                  <Button fullWidth>Full Width</Button>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="text-label-s text-content-secondary">
                    Hover and Active states:
                  </div>
                  <Button variant="primary">Hover me</Button>
                  <Button variant="secondary">Hover me</Button>
                  <Button variant="tertiary">Hover me</Button>
                </div>
              </div>
            </div>

            {/* As Link */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                As Link
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button
                  as={Link}
                  to="/components"
                  variant="secondary"
                  leadingIcon="arrow_forward"
                >
                  View Components
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-border bg-surface">
          <h2 className="text-headline-s mb-4">Icon Buttons</h2>
          <div className="space-y-8">
            {/* Basic Icons */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Basic Icons
              </h3>
              <div className="flex flex-wrap gap-4">
                <IconButton icon="open_in_new" onClick={() => {}} />
                <IconButton icon="more_vert" onClick={() => {}} />
                <IconButton icon="search" onClick={() => {}} />
              </div>
            </div>

            {/* With Menu */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                With Menu
              </h3>
              <div className="flex flex-wrap gap-4">
                <IconButton
                  icon="more_vert"
                  menuOptions={[
                    { value: "edit", label: "Edit" },
                    { value: "delete", label: "Delete" },
                    { value: "archive", label: "Archive" },
                  ]}
                  menuType="action"
                  onClick={() => {}}
                />
              </div>
            </div>

            {/* States */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                States
              </h3>
              <div className="flex flex-wrap gap-4">
                <IconButton icon="open_in_new" onClick={() => {}} disabled />
                <IconButton
                  icon="more_vert"
                  menuOptions={[
                    { value: "edit", label: "Edit" },
                    { value: "delete", label: "Delete" },
                  ]}
                  menuType="action"
                  onClick={() => {}}
                  disabled
                />
              </div>
            </div>

            {/* More Menu */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                More Menu
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-8">
                  <div>
                    <p className="text-body-s text-content mb-2">
                      Left aligned
                    </p>
                    <IconButton
                      icon="more_horiz"
                      menuPosition="left"
                      menuOptions={[
                        { value: "edit", label: "Edit" },
                        { value: "duplicate", label: "Duplicate" },
                        { value: "delete", label: "Delete" },
                      ]}
                    />
                  </div>
                  <div>
                    <p className="text-body-s text-content mb-2">
                      Center aligned
                    </p>
                    <IconButton
                      icon="more_horiz"
                      menuPosition="center"
                      menuOptions={[
                        { value: "edit", label: "Edit" },
                        { value: "duplicate", label: "Duplicate" },
                        { value: "delete", label: "Delete" },
                      ]}
                    />
                  </div>
                  <div>
                    <p className="text-body-s text-content mb-2">
                      Right aligned
                    </p>
                    <IconButton
                      icon="more_horiz"
                      menuPosition="right"
                      menuOptions={[
                        { value: "edit", label: "Edit" },
                        { value: "duplicate", label: "Duplicate" },
                        { value: "delete", label: "Delete" },
                      ]}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <IconButton
                    icon="more_horiz"
                    menuOptions={[
                      { value: "edit", label: "Edit" },
                      { value: "duplicate", label: "Duplicate" },
                      { value: "delete", label: "Delete" },
                    ]}
                    disabled
                  />
                  <span className="text-body-s text-content">Disabled</span>
                </div>
              </div>
            </div>

            {/* Select Menu */}
            {(() => {
              const [sizeValue, setSizeValue] = useState("medium");
              const [smallSizeValue, setSmallSizeValue] = useState("medium");
              const sizeOptions = [
                { value: "small", label: "Small" },
                { value: "medium", label: "Medium" },
                { value: "large", label: "Large" },
              ];

              return (
                <div>
                  <h3 className="text-title-s text-content-secondary mb-4">
                    Select Menu
                  </h3>
                  <div className="space-y-4">
                    <div className="flex flex-col gap-4">
                      <div className="w-[240px]">
                        <Dropdown
                          label="Size"
                          menuType="select"
                          value={sizeValue}
                          onChange={setSizeValue}
                          options={sizeOptions}
                        />
                      </div>
                      <div className="w-[240px]">
                        <Dropdown
                          label="Size (Small)"
                          menuType="select"
                          value={smallSizeValue}
                          onChange={setSmallSizeValue}
                          size="small"
                          options={sizeOptions}
                        />
                      </div>
                      <div className="w-[240px]">
                        <Dropdown
                          label="Size (Disabled)"
                          menuType="select"
                          value={sizeValue}
                          disabled
                          options={sizeOptions}
                        />
                      </div>
                      <div className="w-[240px]">
                        <Dropdown
                          label="Size (Error)"
                          menuType="select"
                          value={sizeValue}
                          error
                          options={sizeOptions}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        <div className="p-6 rounded-lg border border-border bg-surface">
          <h2 className="text-headline-s mb-4">Navigation</h2>
          <div className="space-y-8">
            {/* Variants */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Default
              </h3>
              <div className="max-w-xs space-y-2">
                <NavButton to="/atoms" icon="radio_button_checked">
                  Atoms
                </NavButton>
                <NavButton to="/components" icon="widgets">
                  Components
                </NavButton>
                <NavButton to="/molecules" icon="science">
                  Molecules
                </NavButton>
              </div>
            </div>

            {/* States */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                States
              </h3>
              <div className="max-w-xs space-y-4">
                <div className="space-y-2">
                  <div className="text-label-s text-content-secondary">
                    Active:
                  </div>
                  <NavButton to="/atoms" icon="radio_button_checked">
                    Active Item
                  </NavButton>
                </div>
                <div className="space-y-2">
                  <div className="text-label-s text-content-secondary">
                    Hover any item to see hover state
                  </div>
                  <NavButton to="/hover-example" icon="touch_app">
                    Hover Me
                  </NavButton>
                </div>
              </div>
            </div>

            {/* With Different Icons */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                With Different Icons
              </h3>
              <div className="max-w-xs space-y-2">
                <NavButton to="/settings" icon="settings">
                  Settings
                </NavButton>
                <NavButton to="/profile" icon="person">
                  Profile
                </NavButton>
                <NavButton to="/notifications" icon="notifications">
                  Notifications
                </NavButton>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-border bg-surface">
          <h2 className="text-headline-s mb-4">Inputs</h2>
          <div className="space-y-8">
            {/* Default */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Default
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-label-s text-content-secondary">
                    Basic input (no label or icons):
                  </div>
                  <InlineInput placeholder="Type something..." />
                </div>
                <div className="space-y-2">
                  <div className="text-label-s text-content-secondary">
                    With label only:
                  </div>
                  <InlineInput label="Name" placeholder="Enter your name" />
                </div>
              </div>
            </div>

            {/* With Icons */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                With Icons
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-label-s text-content-secondary">
                    Leading icon with label:
                  </div>
                  <InlineInput
                    leadingIcon="search"
                    label="Search"
                    placeholder="Type to search..."
                  />
                </div>
                <div className="space-y-2">
                  <div className="text-label-s text-content-secondary">
                    Leading icon only:
                  </div>
                  <InlineInput
                    leadingIcon="search"
                    placeholder="Type to search..."
                  />
                </div>
                <div className="space-y-2">
                  <div className="text-label-s text-content-secondary">
                    Trailing icon with label:
                  </div>
                  <InlineInput
                    label="Date"
                    placeholder="Select date"
                    trailingIcon="calendar_today"
                  />
                </div>
                <div className="space-y-2">
                  <div className="text-label-s text-content-secondary">
                    Both icons with label:
                  </div>
                  <InlineInput
                    leadingIcon="search"
                    label="Location"
                    placeholder="Search locations"
                    trailingIcon="location_on"
                  />
                </div>
              </div>
            </div>

            {/* States */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                States
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-label-s text-content-secondary">
                    With value:
                  </div>
                  <InlineInput
                    leadingIcon="person"
                    label="Username"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <div className="text-label-s text-content-secondary">
                    Disabled:
                  </div>
                  <InlineInput
                    leadingIcon="lock"
                    label="Status"
                    placeholder="Enter status"
                    disabled
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <div className="text-label-s text-content-secondary">
                    Error state:
                  </div>
                  <InlineInput
                    leadingIcon="mail"
                    label="Email"
                    placeholder="Enter email"
                    error
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-border bg-surface">
          <h2 className="text-headline-s mb-4">Thumbnails</h2>
          <div className="space-y-8">
            {/* Image Type */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Image Type
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-label-s text-content-secondary">
                    All sizes:
                  </div>
                  <div className="flex items-center gap-4">
                    <Thumbnail
                      type="image"
                      size="large"
                      src="/images/avatars/TheRock.jpg"
                      alt="Large"
                    />
                    <Thumbnail
                      type="image"
                      size="medium"
                      src="/images/avatars/TheRock.jpg"
                      alt="Medium"
                    />
                    <Thumbnail
                      type="image"
                      size="small"
                      src="/images/avatars/TheRock.jpg"
                      alt="Small"
                    />
                    <Thumbnail
                      type="image"
                      size="tiny"
                      src="/images/avatars/TheRock.jpg"
                      alt="Tiny"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-label-s text-content-secondary">
                    Video thumbnails:
                  </div>
                  <div className="flex items-center gap-4">
                    <Thumbnail
                      type="image"
                      size="large"
                      src="/images/avatars/TheRock.jpg"
                      alt="Large Video"
                      isVideo
                    />
                    <Thumbnail
                      type="image"
                      size="medium"
                      src="/images/avatars/TheRock.jpg"
                      alt="Medium Video"
                      isVideo
                    />
                    <Thumbnail
                      type="image"
                      size="small"
                      src="/images/avatars/TheRock.jpg"
                      alt="Small Video"
                      isVideo
                    />
                    <Thumbnail
                      type="image"
                      size="tiny"
                      src="/images/avatars/TheRock.jpg"
                      alt="Tiny Video"
                      isVideo
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-label-s text-content-secondary">
                    With fallback:
                  </div>
                  <div className="flex items-center gap-4">
                    <Thumbnail
                      type="image"
                      size="medium"
                      src="/invalid-path.jpg"
                      alt="Fallback"
                    />
                    <Thumbnail
                      type="image"
                      size="medium"
                      src="/invalid-path.jpg"
                      alt="Video Fallback"
                      isVideo
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Team Badge Type */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Team Badge Type
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-label-s text-content-secondary">
                    All sizes:
                  </div>
                  <div className="flex items-center gap-4">
                    <Thumbnail
                      type="teamBadge"
                      size="large"
                      src="/images/team-badges/svff.jpg"
                      alt="Large"
                    />
                    <Thumbnail
                      type="teamBadge"
                      size="medium"
                      src="/images/team-badges/DIF.png"
                      alt="Medium"
                    />
                    <Thumbnail
                      type="teamBadge"
                      size="small"
                      src="/images/team-badges/IFK-Stockholm.png"
                      alt="Small"
                    />
                    <Thumbnail
                      type="teamBadge"
                      size="tiny"
                      src="/images/team-badges/svff.jpg"
                      alt="Tiny"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-label-s text-content-secondary">
                    With fallback:
                  </div>
                  <div className="flex items-center gap-4">
                    <Thumbnail
                      type="teamBadge"
                      size="medium"
                      src="/invalid-path.jpg"
                      alt="Fallback"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-border bg-surface">
          <h2 className="text-headline-s mb-4">Avatars</h2>
          <div className="space-y-8">
            {/* Sizes */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">Sizes</h3>
              <div className="flex items-center gap-4">
                <Avatar size="large" src="/images/avatars/TheRock.jpg" alt="Large Avatar" />
                <Avatar size="medium" src="/images/avatars/TheRock.jpg" alt="Medium Avatar" />
                <Avatar size="small" src="/images/avatars/TheRock.jpg" alt="Small Avatar" />
                <Avatar size="tiny" src="/images/avatars/TheRock.jpg" alt="Tiny Avatar" />
              </div>
            </div>

            {/* With Badges */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">With Badges</h3>
              <div className="flex items-center gap-4">
                <Avatar 
                  size="large" 
                  src="/images/avatars/TheRock.jpg" 
                  alt="Avatar with success badge"
                  badge={{ variant: 'success' }}
                />
                <Avatar 
                  size="medium" 
                  src="/images/avatars/TheRock.jpg" 
                  alt="Avatar with error badge"
                  badge={{ variant: 'error' }}
                />
                <Avatar 
                  size="small" 
                  src="/images/avatars/TheRock.jpg" 
                  alt="Avatar with edit badge"
                  badge={{ variant: 'edit' }}
                />
              </div>
            </div>

            {/* With Initials */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">With Initials</h3>
              <div className="flex items-center gap-4">
                <Avatar size="large" name="John Doe" />
                <Avatar size="medium" name="Jane Smith" badge={{ variant: 'success' }} />
                <Avatar size="small" name="Robert Johnson" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-border bg-surface">
          <h2 className="text-headline-s mb-4">Chips</h2>
          <div className="space-y-8">
            {/* Variants */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Variants
              </h3>
              <div className="flex flex-wrap gap-4">
                <Chip variant="primary">Primary</Chip>
                <Chip variant="success">Success</Chip>
                <Chip variant="warning">Warning</Chip>
                <Chip variant="error">Error</Chip>
                <Chip variant="info">Info</Chip>
              </div>
            </div>

            {/* Examples */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Examples
              </h3>
              <div className="flex flex-wrap gap-4">
                <Chip variant="success">Completed</Chip>
                <Chip variant="warning">In Progress</Chip>
                <Chip variant="error">Failed</Chip>
                <Chip variant="info">Draft</Chip>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-border bg-surface">
          <h2 className="text-headline-s mb-4">Navigation</h2>
          <div className="space-y-8">
            {/* Variants */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Default
              </h3>
              <div className="max-w-xs space-y-2">
                <NavButton to="/atoms" icon="radio_button_checked">
                  Atoms
                </NavButton>
                <NavButton to="/components" icon="widgets">
                  Components
                </NavButton>
                <NavButton to="/molecules" icon="science">
                  Molecules
                </NavButton>
              </div>
            </div>

            {/* States */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                States
              </h3>
              <div className="max-w-xs space-y-4">
                <div className="space-y-2">
                  <div className="text-label-s text-content-secondary">
                    Active:
                  </div>
                  <NavButton to="/atoms" icon="radio_button_checked">
                    Active Item
                  </NavButton>
                </div>
                <div className="space-y-2">
                  <div className="text-label-s text-content-secondary">
                    Hover any item to see hover state
                  </div>
                  <NavButton to="/hover-example" icon="touch_app">
                    Hover Me
                  </NavButton>
                </div>
              </div>
            </div>

            {/* With Different Icons */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                With Different Icons
              </h3>
              <div className="max-w-xs space-y-2">
                <NavButton to="/settings" icon="settings">
                  Settings
                </NavButton>
                <NavButton to="/profile" icon="person">
                  Profile
                </NavButton>
                <NavButton to="/notifications" icon="notifications">
                  Notifications
                </NavButton>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-border bg-surface">
          <h2 className="text-headline-s mb-4">Dropdowns</h2>
          <div className="space-y-8">
            {/* Sizes */}
            {(() => {
              const [smallValue, setSmallValue] = useState("");
              const [largeValue, setLargeValue] = useState("");
              return (
                <div>
                  <h3 className="text-title-s text-content-secondary mb-4">
                    Sizes
                  </h3>
                  <div className="max-w-sm space-y-4">
                    <Dropdown
                      label="Small (36px)"
                      size="small"
                      value={smallValue}
                      onChange={setSmallValue}
                      options={[
                        { value: "1", label: "Option 1" },
                        { value: "2", label: "Option 2" },
                      ]}
                    />
                    <Dropdown
                      label="Large (48px)"
                      size="large"
                      value={largeValue}
                      onChange={setLargeValue}
                      options={[
                        { value: "1", label: "Option 1" },
                        { value: "2", label: "Option 2" },
                      ]}
                    />
                  </div>
                </div>
              );
            })()}

            {/* Select Menu */}
            {(() => {
              const [sizeValue, setSizeValue] = useState("medium");
              const [smallSizeValue, setSmallSizeValue] = useState("medium");
              const sizeOptions = [
                { value: "small", label: "Small" },
                { value: "medium", label: "Medium" },
                { value: "large", label: "Large" },
              ];

              return (
                <div>
                  <h3 className="text-title-s text-content-secondary mb-4">
                    Select Menu
                  </h3>
                  <div className="space-y-4">
                    <div className="flex flex-col gap-4">
                      <div className="w-[240px]">
                        <Dropdown
                          label="Size"
                          menuType="select"
                          value={sizeValue}
                          onChange={setSizeValue}
                          options={sizeOptions}
                        />
                      </div>
                      <div className="w-[240px]">
                        <Dropdown
                          label="Size (Small)"
                          menuType="select"
                          value={smallSizeValue}
                          onChange={setSmallSizeValue}
                          size="small"
                          options={sizeOptions}
                        />
                      </div>
                      <div className="w-[240px]">
                        <Dropdown
                          label="Size (Disabled)"
                          menuType="select"
                          value={sizeValue}
                          disabled
                          options={sizeOptions}
                        />
                      </div>
                      <div className="w-[240px]">
                        <Dropdown
                          label="Size (Error)"
                          menuType="select"
                          value={sizeValue}
                          error
                          options={sizeOptions}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Basic */}
            {(() => {
              const [basicValue, setBasicValue] = useState("");
              return (
                <div>
                  <h3 className="text-title-s text-content-secondary mb-4">
                    Basic
                  </h3>
                  <div className="max-w-sm space-y-4">
                    <Dropdown
                      value={basicValue}
                      onChange={setBasicValue}
                      options={[
                        { value: "1", label: "Option 1" },
                        { value: "2", label: "Option 2" },
                        { value: "3", label: "Option 3" },
                      ]}
                      placeholder="Select an option"
                    />
                  </div>
                </div>
              );
            })()}

            {/* With Label */}
            {(() => {
              const [labelValue, setLabelValue] = useState("");
              return (
                <div>
                  <h3 className="text-title-s text-content-secondary mb-4">
                    With Label
                  </h3>
                  <div className="max-w-sm space-y-4">
                    <Dropdown
                      label="Dropdown"
                      value={labelValue}
                      onChange={setLabelValue}
                      options={[
                        { value: "1", label: "Option 1" },
                        { value: "2", label: "Option 2" },
                        { value: "3", label: "Option 3" },
                      ]}
                      placeholder="Select an option"
                    />
                  </div>
                </div>
              );
            })()}

            {/* States */}
            {(() => {
              const [errorValue, setErrorValue] = useState("");
              const [withValue, setWithValue] = useState("1");
              return (
                <div>
                  <h3 className="text-title-s text-content-secondary mb-4">
                    States
                  </h3>
                  <div className="max-w-sm space-y-4">
                    <Dropdown
                      label="Disabled"
                      options={[
                        { value: "1", label: "Option 1" },
                        { value: "2", label: "Option 2" },
                      ]}
                      disabled
                    />
                    <Dropdown
                      label="Error"
                      value={errorValue}
                      onChange={setErrorValue}
                      options={[
                        { value: "1", label: "Option 1" },
                        { value: "2", label: "Option 2" },
                      ]}
                      error
                    />
                    <Dropdown
                      label="With Value"
                      value={withValue}
                      onChange={setWithValue}
                      options={[
                        { value: "1", label: "Option 1" },
                        { value: "2", label: "Option 2" },
                      ]}
                    />
                  </div>
                </div>
              );
            })()}

            {/* Custom Icon */}
            {(() => {
              const [sortValue, setSortValue] = useState("");
              return (
                <div>
                  <h3 className="text-title-s text-content-secondary mb-4">
                    Custom Icon
                  </h3>
                  <div className="max-w-sm space-y-4">
                    <Dropdown
                      label="Sort By"
                      value={sortValue}
                      onChange={setSortValue}
                      options={[
                        { value: "name", label: "Name" },
                        { value: "date", label: "Date" },
                      ]}
                      trailingIcon="sort"
                    />
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        <div className="p-6 rounded-lg border border-border bg-surface">
          <h2 className="text-headline-s mb-4">Badges</h2>
          <div className="space-y-8">
            {/* Variants */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Variants
              </h3>
              <div className="flex flex-wrap gap-4">
                <div className="space-y-2">
                  <div className="text-label-s text-content-secondary">
                    Success:
                  </div>
                  <Badge variant="success" />
                </div>
                <div className="space-y-2">
                  <div className="text-label-s text-content-secondary">
                    Error:
                  </div>
                  <Badge variant="error" />
                </div>
                <div className="space-y-2">
                  <div className="text-label-s text-content-secondary">
                    Edit:
                  </div>
                  <Badge variant="edit" />
                </div>
              </div>
            </div>

            {/* Examples */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Examples
              </h3>
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-2">
                  <Badge variant="success" />
                  <span className="text-content">Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="error" />
                  <span className="text-content">Invalid</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="edit" />
                  <span className="text-content">Draft</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-border bg-surface">
          <h2 className="text-headline-s mb-4">Container Card</h2>
          <div className="space-y-8">
            {/* Basic Card */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Basic Card
              </h3>
              <Card>
                <p className="text-content">This is a basic container card with default styling.</p>
              </Card>
            </div>

            {/* Elevated Card */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Elevated Card
              </h3>
              <div className="p-6 rounded-lg border border-border bg-surface shadow-md">
                <p className="text-content">This is an elevated container card with shadow.</p>
              </div>
            </div>

            {/* Colored Card */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Colored Card
              </h3>
              <div className="p-6 rounded-lg border border-primary/20 bg-primary/5">
                <p className="text-content">This is a container card with custom background color.</p>
              </div>
            </div>

            {/* Nested Card */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Nested Card
              </h3>
              <div className="p-6 rounded-lg border border-border bg-surface">
                <h4 className="text-title-m mb-4">Parent Card</h4>
                <div className="p-4 rounded-lg border border-border bg-bg">
                  <p className="text-content">This is a nested card showing hierarchy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-border bg-surface">
          <h2 className="text-headline-s mb-4">Spacers</h2>
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
        </div>

        <div className="p-6 rounded-lg border border-border bg-surface">
          <h2 className="text-headline-s mb-4">Table Cells</h2>
          <div className="space-y-8"></div>
        </div>

        <div className="p-6 rounded-lg border border-border bg-surface">
          <h2 className="text-headline-s mb-4">Switches</h2>
          <div className="space-y-8">
            {/* Radio */}
            {(() => {
              const [checked, setChecked] = useState(false);
              return (
                <div>
                  <h3 className="text-title-s text-content-secondary mb-4">
                    Radio
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Radio checked={checked} onChange={setChecked} />
                      <span className="text-body-s text-content">
                        Click to toggle
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Radio checked disabled />
                      <span className="text-body-s text-content">
                        Checked disabled
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Radio disabled />
                      <span className="text-body-s text-content">
                        Unchecked disabled
                      </span>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            as={Link}
            to="/components"
            variant="secondary"
            leadingIcon="arrow_forward"
          >
            View All Components
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Atoms;
