import React from 'react';
import Icon from './Icon';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Search...',
  className = '',
}) => {
  const handleClear = () => {
    onChange('');
  };

  return (
    <div className={`relative ${className}`}>
      <Icon
        name="search"
        className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-fill-primary"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-9 pl-10 pr-9 text-body-s border border-secondary rounded-[18px] bg-surface text-content placeholder:text-content-tertiary focus:outline-none focus:border-primary focus:ring-0.5 focus:ring-primary disabled:bg-gray-50 disabled:text-content-disabled disabled:cursor-not-allowed"
      />
      {value && (
        <button
          onClick={handleClear}
          className="absolute right-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center hover:bg-bg rounded-full"
        >
          <Icon 
            name="cancel" 
            className="text-content-tertiary text-lg" 
            filled={true}
          />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
