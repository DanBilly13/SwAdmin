import React, { forwardRef } from 'react';
import classNames from 'classnames';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  containerClassName?: string;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      className,
      containerClassName,
      fullWidth = false,
      type,
      id,
      size = 'medium',
      ...props
    },
    ref
  ) => {
    const inputClasses = classNames(
      'block w-full rounded-lg border px-4 py-3',
      'focus:outline-none focus:ring-2',
      'text-body-s',
      {
        'border-red-300 text-red-900 placeholder-red-300 focus:border-content-error focus:ring-content-error': error,
        'border-border text-content placeholder-content-tertiary focus:border-content focus:ring-content': !error,
        'bg-gray-50 text-content-disabled cursor-not-allowed': props.disabled,
        'py-2 text-sm': size === 'small',
        'py-3 text-base': size === 'medium',
        'py-4 text-lg': size === 'large'
      },
      className
    );

    const containerClasses = classNames(
      'relative',
      { 'w-full': fullWidth },
      containerClassName
    );

    return (
      <div className={containerClasses}>
        {label && (
          <label className="block text-sm font-medium text-content mb-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          id={id}
          className={inputClasses}
          {...props}
        />
        {(error || helperText) && (
          <p
            className={classNames('mt-1 text-sm', {
              'text-red-500': error,
              'text-content-secondary': !error && helperText
            })}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);
