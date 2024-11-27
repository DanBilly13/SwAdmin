import React from 'react';
import classNames from 'classnames';
import { Badge, BadgeProps } from '../Badge/Badge';
import { getImagePath, DEFAULT_AVATAR } from '../../../utils/imagePaths';

export type AvatarSize = 'large' | 'medium' | 'small' | 'tiny';

const sizeClasses: Record<AvatarSize, string> = {
  'large': 'w-[60px] h-[60px]',
  'medium': 'w-[48px] h-[48px]',
  'small': 'w-[36px] h-[36px]',
  'tiny': 'w-[24px] h-[24px]'
};

export interface AvatarProps {
  size?: AvatarSize;
  src?: string;
  alt?: string;
  name?: string;
  className?: string;
  badge?: Omit<BadgeProps, 'className'>;
  initials?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  size = 'medium',
  src = getImagePath(DEFAULT_AVATAR),
  alt,
  name,
  className,
  badge,
  initials,
}) => {
  const displayInitials = initials || (name
    ? name
        .split(' ')
        .map((n) => n[0])
        .join('')
    : undefined);

  return (
    <div className="relative inline-block">
      <div
        className={classNames(
          'rounded-full overflow-hidden flex items-center justify-center bg-surface text-content',
          sizeClasses[size],
          className
        )}
      >
        {src ? (
          <img
            src={src}
            alt={alt || name || 'Avatar'}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-sm font-medium">{displayInitials}</span>
        )}
      </div>
      {badge && (
        <div className="absolute -top-1 -left-1">
          <Badge {...badge} />
        </div>
      )}
    </div>
  );
};

export default Avatar;
