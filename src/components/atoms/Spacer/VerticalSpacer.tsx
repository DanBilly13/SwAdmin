import React from 'react';
import classNames from 'classnames';

export type VerticalSpacerSize = 'xs' | 'sm' | 'md' | 'lg';

const sizeClasses: Record<VerticalSpacerSize, string> = {
  'xs': 'w-1',     // 4px
  'sm': 'w-2',     // 8px
  'md': 'w-3',     // 12px
  'lg': 'w-4'      // 16px
};

export interface VerticalSpacerProps {
  size?: VerticalSpacerSize;
  className?: string;
}

export const VerticalSpacer = ({
  size = 'md',
  className
}: VerticalSpacerProps) => {
  return (
    <div 
      className={classNames(
        'h-full',
        sizeClasses[size],
        className
      )}
    />
  );
};

export default VerticalSpacer;
