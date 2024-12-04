import React from 'react';
import { GridWithNav } from '../components/templates/GridWithNav/GridWithNav';
import { DesignSystemNav } from '../components/molecules/DesignSystemNav/DesignSystemNav';
import { Outlet } from 'react-router-dom';

export const DesignSystemLayout = () => {
  const navigation = [
    { name: 'Accordion', href: '/accordion' },
    { name: 'Buttons', href: '/buttons' },
    { name: 'Code Blocks', href: '/code-blocks' },
    { name: 'Containers', href: '/containers' },
    { name: 'Data Display', href: '/data-display' },
    { name: 'Data Input', href: '/data-input' },
    { name: 'Images', href: '/images' },
    { name: 'Navigation', href: '/navigation' },
    { name: 'Spacers', href: '/spacers' },
    { name: 'Templates', href: '/templates' },
    { name: 'Typography', href: '/typography' },
    { name: 'Colors', href: '/colors' },
    { name: 'Tables', href: '/tables' },
    { name: 'Molecules', href: '/molecules' },
    { name: 'Text Blocks', href: '/text-blocks' },
    { name: 'Cards', href: '/cards' },
  ].sort((a, b) => {
    // Ensure Molecules and Cards are always last
    if (['Molecules', 'Cards', 'Text Blocks'].includes(a.name)) return 1;
    if (['Molecules', 'Cards', 'Text Blocks'].includes(b.name)) return -1;
    
    // Sort the rest alphabetically
    return a.name.localeCompare(b.name);
  });

  return (
    <GridWithNav navigation={<DesignSystemNav navigation={navigation} />}>
      <Outlet />
    </GridWithNav>
  );
};

export default DesignSystemLayout;
