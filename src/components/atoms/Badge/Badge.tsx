import React from 'react';
import classNames from 'classnames';

export type BadgeVariant = 'success' | 'error' | 'edit';

const variantClasses: Record<BadgeVariant, { background: string; icon: string }> = {
  'success': {
    background: 'bg-content-success',
    icon: 'check'
  },
  'error': {
    background: 'bg-content-error',
    icon: 'priority_high'
  },
  'edit': {
    background: 'bg-content-tertiary',
    icon: 'edit'
  }
};

export interface BadgeProps {
  variant: BadgeVariant;
  className?: string;
  children?: React.ReactNode;
}

export const Badge = ({ variant, className, children }: BadgeProps) => {
  return (
    <div
      className={classNames(
        'flex items-center rounded-full text-xs',
        {
          'w-5 h-5 justify-center': !children,
          'gap-1 px-2 py-1': children
        },
        variantClasses[variant].background,
        className
      )}
    >
      <span className="material-symbols-rounded text-fill-on text-xs">
        {variantClasses[variant].icon}
      </span>
      {children && <span className="text-fill-on">{children}</span>}
    </div>
  );
};
