import React from 'react';
import { Link } from 'react-router-dom';
import { NavButton } from '../../atoms';

type NavigationItem = {
  name: string;
  href: string;
};

type DesignSystemNavProps = {
  navigation: NavigationItem[];
};

export const DesignSystemNav = ({ navigation }: DesignSystemNavProps) => {
  return (
    <div className="p-4 space-y-2">
      <Link to="/" className="block mb-8">
        <h1 className="text-title-l font-bold text-content">SwAdmin</h1>
      </Link>
      
      <h2 className="text-headline-s mb-6">Design System</h2>
      
      <div className="space-y-2">
        {navigation.map(({ href, name }) => (
          <NavButton
            key={href}
            to={href}
            icon={getIconForRoute(href)}
          >
            {name}
          </NavButton>
        ))}
      </div>
    </div>
  );
};

const getIconForRoute = (route: string): string => {
  switch (route) {
    case '/atoms':
      return 'radio_button_checked';
    case '/components':
      return 'widgets';
    case '/molecules':
      return 'science';
    case '/templates':
      return 'dashboard_customize';
    case '/typography':
      return 'text_fields';
    case '/colors':
      return 'palette';
    default:
      return 'chevron_right';
  }
};

export default DesignSystemNav;
