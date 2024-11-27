import React from 'react';
import { Avatar, Chip, Badge } from '../../atoms';
import classNames from 'classnames';
import type { BadgeVariant } from '../../atoms/Badge/Badge';

export type UserProfileSize = 'large' | 'medium' | 'small';

const avatarSizes: Record<UserProfileSize, 'large' | 'medium' | 'small'> = {
  large: 'large',
  medium: 'medium',
  small: 'small'
};

const nameTextClasses: Record<UserProfileSize, string> = {
  large: 'text-headline-s',
  medium: 'text-title-m',
  small: 'text-title-m'
};

const roleClasses: Record<UserProfileSize, string> = {
  large: 'mt-1',
  medium: 'mt-0.5 text-label-s',
  small: 'mt-0.5 text-label-s'
};

export interface UserProfileProps {
  name: string;
  role: string;
  avatarSrc?: string;
  size?: UserProfileSize;
  className?: string;
  badge?: {
    variant: BadgeVariant;
  };
}

export const UserProfile: React.FC<UserProfileProps> = ({
  name,
  role,
  avatarSrc,
  size = 'large',
  className = '',
  badge,
}) => {
  return (
    <div className={classNames('flex items-center', className)}>
      <div className="relative">
        <Avatar 
          size={avatarSizes[size]} 
          src={avatarSrc} 
          alt={name}
          badge={badge}
        />
      </div>
      <div className={classNames(
        'flex flex-col',
        size === 'large' ? 'ml-4' : 'ml-3'
      )}>
        <h3 className={classNames(
          nameTextClasses[size],
          'text-content-primary'
        )}>
          {name}
        </h3>
        {size === 'large' ? (
          <div className="inline-block">
            <Chip variant="neutral" className={roleClasses[size]}>
              {role}
            </Chip>
          </div>
        ) : (
          <span className={classNames(
            roleClasses[size],
            'text-content-secondary'
          )}>
            {role}
          </span>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
