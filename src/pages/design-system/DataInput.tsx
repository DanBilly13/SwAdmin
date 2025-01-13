import React, { useState } from "react";
import {
  Input,
  InlineInput,
  SectionCard,
  Radio,
  SearchBar,
  Dropdown,
} from "../../components/atoms";
import { DesignSystemContentContainerSlots } from "../../components/atoms/ContentContainerSlots/DesignSystemContentContainerSlots";
import { MainContentHead } from "../../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../../components/templates";
import { PageTitle } from "../../components/atoms/PageTitle/PageTitle";

const DataInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [hasError, setHasError] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { toggleDrawer } = useDrawerControl();

  // Dropdown states
  const [basicValue, setBasicValue] = useState("");
  const [smallValue, setSmallValue] = useState("");
  const [largeValue, setLargeValue] = useState("");

  return (
    <DesignSystemContentContainerSlots
      header={
        <>
          <MainContentHead
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "Design System", href: "/design-system" },
              { label: "Data Input", href: "/design-system/data-input" },
            ]}
            onMenuClick={toggleDrawer}
            actions={[
              {
                label: "View Source",
                onClick: () =>
                  window.open(
                    "https://github.com/yourusername/SwAdmin/tree/main/src/components/atoms/Input",
                    "_blank"
                  ),
                leadingIcon: "code",
              },
            ]}
          />
          <PageTitle
            title="Data Input"
            description="Form controls and input components for collecting user data."
          />
        </>
      }
      content={
        <div className="space-y-8">
          {/* Dropdowns */}
          <SectionCard title="Dropdowns">
            {/* Basic */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">
                Sizes
              </h3>
              <div className="flex flex-col gap-4 max-w-md">
                <Dropdown
                  label="Small"
                  size="small"
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                  ]}
                  value={smallValue}
                  onChange={setSmallValue}
                />
                <Dropdown
                  label="Medium"
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                  ]}
                  value={basicValue}
                  onChange={setBasicValue}
                />
                <Dropdown
                  label="Large"
                  size="large"
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                  ]}
                  value={largeValue}
                  onChange={setLargeValue}
                />
              </div>
            </div>

            {/* Menu Types */}
            <div className="mt-8">
              <h3 className="text-title-s text-content-secondary mb-4">
                Menu Types
              </h3>
              <div className="flex flex-col gap-4 max-w-md">
                <Dropdown
                  label="Action Menu (Default)"
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                  ]}
                  value={basicValue}
                  onChange={setBasicValue}
                  menuType="action"
                />
                <Dropdown
                  label="Select Menu (with Radio)"
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                  ]}
                  value={basicValue}
                  onChange={setBasicValue}
                  menuType="select"
                />
              </div>
            </div>

            {/* States */}
            <div className="mt-8">
              <h3 className="text-title-s text-content-secondary mb-4">
                States
              </h3>
              <div className="flex flex-col gap-4 max-w-md">
                <Dropdown
                  label="Disabled"
                  disabled
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                  ]}
                  value={basicValue}
                  onChange={setBasicValue}
                />
                <Dropdown
                  label="Error"
                  error={true}
                  errorMessage="This field is required"
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                  ]}
                  value={basicValue}
                  onChange={setBasicValue}
                />
              </div>
            </div>
          </SectionCard>

          {/* Inline Inputs */}
          <SectionCard title="Inline Inputs">
            <div className="space-y-8">
              {/* With Label */}
              <div>
                <h3 className="text-title-s text-content-secondary mb-4">
                  With Label
                </h3>
                <div className="flex items-center gap-2">
                  <InlineInput
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="john.doe@mail.com"
                    label="Email"
                  />
                  {/* <span className="text-label-s text-content">USD</span> */}
                </div>
              </div>

              {/* States */}
              <div>
                <h3 className="text-title-s text-content-secondary mb-4">
                  States
                </h3>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <InlineInput
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Error state"
                      error={true}
                      label="Email"
                    />
                    <span className="text-error text-label-s">
                      This field is required
                    </span>
                  </div>
                  <InlineInput
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Disabled state"
                    disabled
                    label="Password"
                  />
                </div>
              </div>

              {/* With Label and Icons */}
              <div>
                <h3 className="text-title-s text-content-secondary mb-4">
                  With Label and Icons
                </h3>
                <div className="flex flex-col gap-2">
                  <InlineInput
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="0.00"
                    label="Amount"
                    leadingIcon="attach_money"
                  />
                  <InlineInput
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="johndoe@example.com"
                    label="Email"
                    leadingIcon="mail"
                    trailingIcon="check_circle"
                  />
                </div>
              </div>
            </div>
          </SectionCard>

          {/* Search */}
          <SectionCard title="Search">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <SearchBar
                  value={searchValue}
                  onChange={setSearchValue}
                  placeholder="Search for anything..."
                  className="w-80"
                />
              </div>
              <div className="flex items-center gap-4">
                <SearchBar
                  value=""
                  onChange={() => {}}
                  placeholder="Disabled search..."
                  className="w-80 opacity-50 pointer-events-none"
                />
              </div>
            </div>
          </SectionCard>

          {/* Switches */}
          <SectionCard title="Switches">
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
          </SectionCard>
        </div>
      }
    />
  );
};

export default DataInput;
