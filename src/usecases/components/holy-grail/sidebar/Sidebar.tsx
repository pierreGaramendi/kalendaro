import { Logo } from "../../logo/Logo";
import { CalendarIcon, CalendarDaysIcon } from "@heroicons/react/16/solid";
import { SidebarItemX } from "./SidebarItem";

export const Sidebar = () => {
  return (
    <nav className="text-white sidebar-left bg-white dark:bg-zinc-900 border-r dark:border-zinc-600 p-6">
      <div className="flex justify-left items-center p-2 mb-6">
        <Logo imgWidth="30px" imgHeight="30px" fontSize="xl" />
      </div>

      <ul>
        <li className="pb-2">
          <SidebarItemX path="events">
            <CalendarIcon className="size-6 mr-2" />
            Eventossss
          </SidebarItemX>
        </li>
        <li className="pb-2">
          <SidebarItemX path="example">
            <CalendarDaysIcon className="size-6 mr-2" />
            Ejemplos
          </SidebarItemX>
        </li>
      </ul>
    </nav>
  );
};
