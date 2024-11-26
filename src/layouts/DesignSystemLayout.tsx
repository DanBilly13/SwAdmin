import React from 'react';
import { GridWithNav } from '../components/templates/GridWithNav/GridWithNav';
import { DesignSystemNav } from '../components/molecules/DesignSystemNav/DesignSystemNav';
import { Outlet } from 'react-router-dom';

export const DesignSystemLayout = () => {
  const navigation = [
    { name: 'Atoms', href: '/atoms' },
    { name: 'Components', href: '/components' },
    { name: 'Molecules', href: '/molecules' },
    { name: 'Typography', href: '/typography' },
    { name: 'Colors', href: '/colors' },
    { name: 'Tables', href: '/tables' },
    { name: 'Templates', href: '/templates' },
  ];

  return (
    <GridWithNav navigation={<DesignSystemNav navigation={navigation} />}>
      <div className="p-6">
        <Outlet />
      </div>
    </GridWithNav>
  );
};

export default DesignSystemLayout;
