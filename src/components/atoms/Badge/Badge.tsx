import React from 'react';
import classNames from 'classnames';

export type BadgeVariant = 'success' | 'error' | 'warning' | 'info' | 'neutral';

const variantClasses: Record<BadgeVariant, { background: string; icon: string }> = {
  'success': {
    background: 'bg-content-success',
    icon: 'check'
  },
  'error': {
    background: 'bg-content-error',
    icon: 'priority_high'
  },
  'warning': {
    background: 'bg-content-caution',
    icon: 'warning'
  },
  'info': {
    background: 'bg-content-info',
    icon: 'info'
  },
  'neutral': {
    background: 'bg-content-tertiary',
    icon: 'circle'
  }
};

export interface BadgeProps {
  variant: BadgeVariant;
  className?: string;
  children?: React.ReactNode;
  icon?: string;
}

export const Badge = ({ variant, className, children, icon }: BadgeProps) => {
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
        {icon || variantClasses[variant].icon}
      </span>
      {children && <span className="text-fill-on">{children}</span>}
    </div>
  );
};

export default Badge;
