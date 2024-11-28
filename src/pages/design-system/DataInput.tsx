import React, { useState } from "react";
import { Input, InlineInput, SectionCard, Radio, SearchBar, Dropdown } from "../../components/atoms";
import { ContentContainer } from "../../components/atoms/ContentContainer/ContentContainer";
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
    <ContentContainer>
      <MainContentHead
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Design System", href: "/components" },
          { label: "Data Input", href: "/data-input" },
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
      >
        <PageTitle 
          title="Data Input" 
          description="Form controls and input components for collecting user data."
        />
      </MainContentHead>

      <div className="space-y-8">
        {/* Dropdowns */}
        <SectionCard title="Dropdowns">
          {/* Basic */}
          <div>
            <h3 className="text-title-s text-content-secondary mb-4">Sizes</h3>
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
            <h3 className="text-title-s text-content-secondary mb-4">Menu Types</h3>
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
            <h3 className="text-title-s text-content-secondary mb-4">States</h3>
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

        {/* Regular Inputs */}
        <SectionCard title="Regular Inputs">
          <div className="space-y-8">
            {/* Basic */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">Basic</h3>
              <div className="space-y-4 max-w-md">
                <Input
                  label="Label"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Placeholder..."
                />
                <Input
                  label="Disabled"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Placeholder..."
                  disabled
                />
                <Input
                  label="Error"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Placeholder..."
                  error={hasError ? "This field has an error" : undefined}
                />
              </div>
            </div>

            {/* With Icons */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">With Icons</h3>
              <div className="space-y-4 max-w-md">
                <div className="relative">
                  <Input
                    label="Leading Icon"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Search..."
                    className="pl-10"
                  />
                  <span className="material-symbols-rounded absolute left-3 top-[34px] text-content-secondary">
                    search
                  </span>
                </div>
                <div className="relative">
                  <Input
                    label="Trailing Icon"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Password..."
                    type="password"
                    className="pr-10"
                  />
                  <span className="material-symbols-rounded absolute right-3 top-[34px] text-content-secondary">
                    visibility
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Inline Inputs */}
        <SectionCard title="Inline Inputs">
          <div className="space-y-8">
            {/* Basic */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">Basic</h3>
              <div className="flex items-center gap-2">
                <span className="text-label-s text-content">$</span>
                <InlineInput
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="0.00"
                />
              </div>
            </div>

            {/* With Label */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">With Label</h3>
              <div className="flex items-center gap-2">
                <InlineInput
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="0.00"
                  label="Amount"
                />
                <span className="text-label-s text-content">USD</span>
              </div>
            </div>

            {/* With Icons */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">With Icons</h3>
              <div className="flex flex-col gap-2">
                <InlineInput
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Search..."
                  leadingIcon="search"
                />
                <InlineInput
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Password"
                  type="password"
                  trailingIcon="visibility"
                />
                <InlineInput
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Amount"
                  leadingIcon="attach_money"
                  trailingIcon="info"
                />
              </div>
            </div>

            {/* States */}
            <div>
              <h3 className="text-title-s text-content-secondary mb-4">States</h3>
              <div className="flex flex-col gap-2">
                <InlineInput
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Error state"
                  error={hasError}
                />
                <InlineInput
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Disabled state"
                  disabled
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
    </ContentContainer>
  );
};

export default DataInput;
