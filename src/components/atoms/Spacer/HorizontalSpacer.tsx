import React from 'react';
import classNames from 'classnames';

export type HorizontalSpacerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

const sizeClasses: Record<HorizontalSpacerSize, string> = {
  'xs': 'h-1',     // 4px
  'sm': 'h-2',     // 8px
  'md': 'h-3',     // 12px
  'lg': 'h-4',     // 16px
  'xl': 'h-6',     // 24px
  '2xl': 'h-8',    // 32px
  '3xl': 'h-12'    // 48px
};

export interface HorizontalSpacerProps {
  size?: HorizontalSpacerSize;
  className?: string;
}

export const HorizontalSpacer = ({
  size = 'md',
  className
}: HorizontalSpacerProps) => {
  return (
    <div 
      className={classNames(
        'w-full',
        sizeClasses[size],
        className
      )}
    />
  );
};

export default HorizontalSpacer;
