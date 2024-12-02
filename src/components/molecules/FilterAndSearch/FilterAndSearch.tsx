/**
 * FilterAndSearch Component
 *
 * A responsive component that combines filter dropdowns with a search bar.
 * Uses a 16-column grid system for layout with different configurations per breakpoint:
 *
 * Layout per breakpoint:
 * - xs (mobile): Stacked layout (1 column)
 * - sm (tablet): 3 columns
 * - md/lg (desktop): 16 columns with:
 *   - Each filter: 4/3 columns
 *   - Spacer: 4/7 columns (pushes search to right)
 *   - Search: 4/3 columns
 */

import React from "react";
import { SearchBar } from "../../atoms/SearchBar/SearchBar";
import { Dropdown, DropdownOption } from "../../atoms/Dropdown/Dropdown";

interface FilterOption {
  label: string;
  value: string;
}

interface FilterGroup {
  label: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
}

interface FilterAndSearchProps {
  /** Array of filter configurations */
  filters: FilterGroup[];
  /** Current search input value */
  searchValue: string;
  /** Callback for search input changes */
  onSearchChange: (value: string) => void;
  /** Optional className for additional styling */
  className?: string;
  /** Whether to show the spacer that pushes search to the right */
  showSpacer?: boolean;
}

export const FilterAndSearch: React.FC<FilterAndSearchProps> = ({
  filters,
  searchValue,
  onSearchChange,
  className = "",
  showSpacer = true,
}) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {/* Main container - stack on mobile, flex on larger screens */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center w-full">
        {/* Filter container - full width stack on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
          {filters.map((filter, index) => (
            <Dropdown
              key={index}
              label={filter.label}
              value={filter.value}
              options={filter.options}
              onChange={filter.onChange}
              menuType="select"
              size="small"
              className="w-full md:w-48"
            />
          ))}
        </div>

        {/* Spacer - grows to fill available space */}
        {showSpacer && <div className="hidden md:block flex-grow bg-red-600 h-10" />}

        {/* Search bar - full width on mobile, fixed width on larger screens */}
        <SearchBar
          value={searchValue}
          onChange={onSearchChange}
          placeholder="Search..."
          className="w-full md:w-48"
        />
      </div>
    </div>
  );
};

export default FilterAndSearch;
