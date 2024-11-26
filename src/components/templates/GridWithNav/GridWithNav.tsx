import React from 'react';
import classNames from 'classnames';

export interface GridWithNavProps {
  navigation: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const GridWithNav: React.FC<GridWithNavProps> = ({
  navigation,
  children,
  className
}) => {
  return (
    <div className={classNames(
      'grid grid-cols-12 min-h-screen w-full relative',
      className
    )}>
      {/* Left Navigation - 2 columns on desktop */}
      <nav className="col-span-12 lg:col-span-2 bg-surface border-r border-border lg:sticky lg:top-0 lg:h-screen">
        <div className="h-full overflow-y-auto">
          {navigation}
        </div>
      </nav>

      {/* Main Content - 10 columns on desktop */}
      <main className="col-span-12 lg:col-span-10 bg-bg min-h-screen">
        {/* Content Grid - 10 columns with 1 column padding on each side */}
        <div className="grid grid-cols-10 h-full">
          <div className="col-span-10 lg:col-span-8 lg:col-start-2">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default GridWithNav;
