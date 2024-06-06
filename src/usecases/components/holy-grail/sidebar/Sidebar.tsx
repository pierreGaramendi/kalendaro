import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #282c34;
  display: flex;
  flex-direction: column;
`;

const SidebarLink = styled(NavLink)`
  padding: 20px;
  color: white;
  text-decoration: none;
  &.active {
    background-color: var(--color-primary);
  }
  &:hover {
    background-color: var(--color-primary);
  }
`;

export const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarLink to="/" end>
        Home
      </SidebarLink>
      <SidebarLink to="/events">Eventos</SidebarLink>
      <SidebarLink to="/example">Ejemplos</SidebarLink>
    </SidebarContainer>
  );
};
