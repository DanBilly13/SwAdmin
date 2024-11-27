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
  filters: FilterGroup[];
  searchValue: string;
  onSearchChange: (value: string) => void;
  className?: string;
}

export const FilterAndSearch: React.FC<FilterAndSearchProps> = ({
  filters,
  searchValue,
  onSearchChange,
  className = "",
}) => {
  return (
    <div className={`grid gap-3 items-center ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-16 gap-3 items-center w-full">
        {filters.map((filter, index) => (
          <Dropdown
            key={index}
            label={filter.label}
            value={filter.value}
            options={filter.options}
            onChange={filter.onChange}
            menuType="select"
            size="small"
            className="col-span-1 sm:col-span-1 lg:col-span-3"
          />
        ))}
        <div className="hidden lg:block lg:col-span-3" />
        <SearchBar
          value={searchValue}
          onChange={onSearchChange}
          placeholder="Search..."
          className="col-span-1 sm:col-span-3 md:col-span-1 lg:col-span-4"
        />
      </div>
    </div>
  );
};

export default FilterAndSearch;
