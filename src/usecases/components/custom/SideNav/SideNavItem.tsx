import React from "react";
import { NavLink } from "react-router-dom";
import "./SideNav.css";

interface SidebarItemProps {
  path: string;
  label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ path, label }) => {
  return (
    <NavLink
      to={path}
      className="sidebar-item"
      style={({ isActive }) =>
        isActive
          ? {
              textDecoration: "none",
              color: "white",
              backgroundColor: "#007bff",
            }
          : {}
      }
    >
      {label}
    </NavLink>
  );
};

export default SidebarItem;
