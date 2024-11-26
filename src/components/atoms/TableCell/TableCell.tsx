import React from 'react';
import classNames from 'classnames';
import { Thumbnail, ThumbnailProps } from '../Thumbnail/Thumbnail';
import { Chip, ChipProps } from '../Chip/Chip';
import { Avatar, AvatarProps } from '../Avatar/Avatar';
import { BadgeProps } from '../Badge/Badge';

// Type definitions
type TableCellAlign = 'left' | 'center' | 'right';
type TableCellPadding = 'normal' | 'compact' | 'none';
type TableCellVariant = 'body' | 'header' | 'footer';
type TableCellSize = 'small' | 'medium';
type TableSortDirection = 'ascending' | 'descending' | 'none' | false;

interface TableCellBaseProps {
  className?: string;
  align?: TableCellAlign;
  padding?: TableCellPadding;
  size?: TableCellSize;
  variant?: TableCellVariant;
  sortDirection?: TableSortDirection;
  isFirst?: boolean;
  isLast?: boolean;
}

interface TableCellSimpleProps extends TableCellBaseProps {
  children: React.ReactNode;
}

interface TableCellStructuredProps extends TableCellBaseProps {
  title?: string;
  description?: string;
  imageType?: 'thumbnail' | 'avatar';
  thumbnail?: Omit<ThumbnailProps, 'className'>;
  avatar?: Omit<AvatarProps, 'className'> | null;
  chip?: Omit<ChipProps, 'className'>;
  badge?: Omit<BadgeProps, 'className'>;
}

type TableCellProps = TableCellSimpleProps | TableCellStructuredProps;

// Helper functions
const getTableCellClasses = (
  align: TableCellAlign = 'left',
  padding: TableCellPadding = 'normal',
  size: TableCellSize = 'medium',
  variant: TableCellVariant = 'body',
  isFirst: boolean = false,
  isLast: boolean = false,
  className?: string
) => {
  return classNames(
    'flex items-center min-h-[40px]',
    {
      // Alignment
      'justify-start text-left': align === 'left',
      'justify-center text-center': align === 'center',
      'justify-end text-right': align === 'right',
      
      // Padding
      'py-4': padding === 'normal',
      'py-2': padding === 'compact',
      'px-4': padding === 'normal' && !isFirst && !isLast,
      'pl-0 pr-4': padding === 'normal' && isFirst && !isLast,
      'pr-0 pl-4': padding === 'normal' && !isFirst && isLast,
      'px-0': padding === 'normal' && isFirst && isLast || padding === 'compact' && isFirst && isLast,
      'px-2': padding === 'compact' && !isFirst && !isLast,
      'pl-0 pr-2': padding === 'compact' && isFirst && !isLast,
      'pr-0 pl-2': padding === 'compact' && !isFirst && isLast,
      'p-0': padding === 'none',
      
      // Size
      'text-body-s': size === 'medium',
      'text-label-s': size === 'small',
      
      // Variant
      'font-medium bg-surface-secondary': variant === 'header',
      'border-t border-border': variant === 'footer',
    },
    className
  );
};

const getAriaSortValue = (sortDirection?: TableSortDirection) => {
  if (!sortDirection) return 'none';
  return sortDirection;
};

// Content components
const StructuredContent: React.FC<TableCellStructuredProps> = ({
  title,
  description,
  imageType = 'thumbnail',
  thumbnail,
  avatar,
  chip,
  badge
}) => {
  if (imageType === 'avatar' && avatar) {
    return (
      <div className="flex items-center gap-3">
        <Avatar {...avatar} badge={badge} size="small" className="flex-shrink-0" />
        <div className="flex flex-col">
          <span className="text-body-s text-content-primary">{title}</span>
          {description && (
            <span className="text-label-s text-content-secondary">
              {description}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      {imageType === 'thumbnail' && thumbnail && (
        <Thumbnail {...thumbnail} className="flex-shrink-0" />
      )}
      <div
        className={classNames('flex flex-col min-h-[32px] justify-center', {
          'ml-3': imageType === 'thumbnail' && thumbnail
        })}
      >
        {title && <div className="text-content">{title}</div>}
        {description && <div className="text-content-secondary">{description}</div>}
        {chip && (
          <div className="mt-1">
            <Chip {...chip} />
          </div>
        )}
      </div>
    </>
  );
};

// Main component
export const TableCell = (props: TableCellProps) => {
  const {
    align = 'left',
    padding = 'normal',
    size = 'medium',
    variant = 'body',
    className,
    sortDirection,
    isFirst = false,
    isLast = false,
  } = props;

  const cellClasses = getTableCellClasses(align, padding, size, variant, isFirst, isLast, className);
  const ariaSortValue = getAriaSortValue(sortDirection);

  return (
    <div 
      className={cellClasses}
      role="cell"
      aria-sort={ariaSortValue}
    >
      {'children' in props ? (
        props.children
      ) : (
        <StructuredContent
          title={props.title}
          description={props.description}
          imageType={props.imageType}
          thumbnail={props.thumbnail}
          avatar={props.avatar}
          chip={props.chip}
          badge={props.badge}
        />
      )}
    </div>
  );
};

export default TableCell;
