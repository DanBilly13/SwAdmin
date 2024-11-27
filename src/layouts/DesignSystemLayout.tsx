import React from 'react';
import { GridWithNav } from '../components/templates/GridWithNav/GridWithNav';
import { DesignSystemNav } from '../components/molecules/DesignSystemNav/DesignSystemNav';
import { Outlet } from 'react-router-dom';

export const DesignSystemLayout = () => {
  const navigation = [
    { name: 'Molecules', href: '/molecules' },
    { name: 'Typography', href: '/typography' },
    { name: 'Colors', href: '/colors' },
    { name: 'Tables', href: '/tables' },
    { name: 'Templates', href: '/templates' },
    { name: 'Data Input', href: '/data-input' },
    { name: 'Data Display', href: '/data-display' },
    { name: 'Containers', href: '/containers' },
    { name: 'Cards', href: '/cards' },
    { name: 'Spacers', href: '/spacers' },
    { name: 'Buttons', href: '/buttons' },
    { name: 'Navigation', href: '/navigation' },
    { name: 'Images', href: '/images' },
  ];

  return (
    <GridWithNav navigation={<DesignSystemNav navigation={navigation} />}>
      <Outlet />
    </GridWithNav>
  );
};

export default DesignSystemLayout;
