import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  filled?: boolean;
}

export const Icon: React.FC<IconProps> = ({ name, className = '', filled = false }) => {
  // This is a placeholder implementation
  // In a real app, you might use an icon library like react-icons or a custom icon system
  return (
    <span 
      className={`material-symbols-rounded select-none ${className}`}
      style={{ fontVariationSettings: `'FILL' ${filled ? 1 : 0}` }}
    >
      {name}
    </span>
  );
};

export default Icon;
