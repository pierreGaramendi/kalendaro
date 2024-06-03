import React from "react";
import { NavLink } from "react-router-dom";

interface SidebarItemProps {
  path: string;
  children?: React.ReactNode;
}

export const SidebarItemX: React.FC<SidebarItemProps> = ({
  path,
  children,
}) => {
  return (
    <NavLink
      to={path}
      style={({ isActive }) =>
        isActive
          ? {
              textDecoration: "none",
              color: "blue"
            }
          : {}
      }
    >
      {children && (
        <div className="flex flex-row items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
          {children}
        </div>
      )}
    </NavLink>
  );
};
