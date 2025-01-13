import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Button } from '../../atoms/Button';

interface CardProps {
  title: string;
  description: string;
  to: string;
  className?: string;
  buttons?: Array<{
    to: string;
    label: string;
    icon: string;
  }>;
}

const Card: React.FC<CardProps> = ({ title, description, to, className, buttons }) => (
  <Link 
    to={to}
    className={classNames(
      "block p-6 rounded-lg border transition-shadow duration-200",
      "hover:shadow-lg",
      className
    )}
  >
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {buttons && (
        <div className="flex flex-wrap gap-2">
          {buttons.map((button, index) => (
            <Button
              key={index}
              as={Link}
              to={button.to}
              variant="secondary"
              leadingIcon={button.icon}
            >
              {button.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  </Link>
);

export interface HomeTemplateProps {
  header: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
  header,
  children,
  className
}) => {
  return (
    <div className={classNames(
      'grid grid-cols-12 gap-6 w-full px-4 py-6',
      className
    )}>
      {/* Header - Full width */}
      <div className="col-span-12">
        {header}
      </div>

      {/* Main Content - 8 columns centered on desktop */}
      <main className="col-span-12 lg:col-span-8 lg:col-start-3">
        {children}
      </main>
    </div>
  );
};

export { Card };
export default HomeTemplate;
