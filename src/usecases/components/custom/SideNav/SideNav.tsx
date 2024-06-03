import React from 'react';
import SidebarItem from './SideNavItem';
import './SideNav.css';

export const SideNavs: React.FC = () => {
  return (
    <div className="sidebar">
      <SidebarItem path="/" label="Home" />
      <SidebarItem path="/events" label="Eventos" />
      <SidebarItem path="/example" label="Ejemplos" />
    </div>
  );
};


