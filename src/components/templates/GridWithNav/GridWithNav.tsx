import React, { useState, createContext, useContext, useCallback } from 'react';
import classNames from 'classnames';

interface DrawerContextType {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
  toggleDrawer: () => void;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const useDrawerControl = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawerControl must be used within a GridWithNav');
  }
  return context;
};

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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = useCallback(() => setIsDrawerOpen(prev => !prev), []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, setIsDrawerOpen, toggleDrawer }}>
      <div className={classNames(
        'grid grid-cols-12 min-h-screen w-full relative',
        className
      )}>
        {/* Overlay - Only visible when drawer is open */}
        {isDrawerOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-[90] xl:hidden"
            onClick={() => setIsDrawerOpen(false)}
          />
        )}

        {/* Right Navigation - Drawer below xl, fixed sidebar on xl and above */}
        <nav 
          className={classNames(
            'fixed xl:relative h-screen z-[100] xl:z-auto',
            'w-64 xl:w-auto',
            'transition-transform duration-300 ease-in-out',
            'top-0 right-0 xl:right-auto',
            'col-span-12 xl:col-span-2 bg-surface',
            'border-l xl:border-l-0 xl:border-r border-border',
            'xl:sticky xl:top-0',
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full xl:translate-x-0'
          )}
        >
          <div className="h-full overflow-y-auto p-4">
            {navigation}
          </div>
        </nav>

        {/* Main Content - 10 columns on xl and above */}
        <main className="col-span-12 xl:col-span-10 bg-bg min-h-screen">
          {/* Content Grid - 10 columns with 1 column padding on each side */}
          <div className="grid grid-cols-10 h-full">
            <div className="col-span-10 2xl:col-span-8 2xl:col-start-2">
              {children}
            </div>
          </div>
        </main>
      </div>
    </DrawerContext.Provider>
  );
};

export default GridWithNav;
