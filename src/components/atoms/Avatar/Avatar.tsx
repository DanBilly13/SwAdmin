import React from 'react';
import classNames from 'classnames';
import { Badge, BadgeProps } from '../Badge/Badge';
import { getAssetPath } from '../../../utils/paths';

export type AvatarSize = 'lg' | 'md' | 'sm' | 'xsm';

const sizeClasses: Record<AvatarSize, string> = {
  'lg': 'w-[60px] h-[60px]',
  'md': 'w-[48px] h-[48px]',
  'sm': 'w-[36px] h-[36px]',
  'xsm': 'w-[24px] h-[24px]'
};

const getDefaultAvatar = () => {
  return getAssetPath('avatars/TheRock.jpg');
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
  size = 'md',
  src = getDefaultAvatar(),
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
