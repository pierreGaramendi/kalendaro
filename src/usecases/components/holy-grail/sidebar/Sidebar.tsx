import { Link } from "react-router-dom";
import { Logo } from "../../logo/Logo";
import {
  UserIcon,
  ClockIcon,
  ChevronRightIcon,
  CalendarIcon,
  CalendarDaysIcon
} from "@heroicons/react/16/solid";

export const Sidebar = () => {
  return (
    <nav className="text-white sidebar-left bg-white dark:bg-zinc-900 border-r dark:border-zinc-600 p-6">
      <div className="flex justify-left items-center">
        <Logo />
      </div>
      <ul>
        <li className="flex flex-row items-center border p-2 rounded-lg dark:border-zinc-600 my-2">
        <CalendarIcon className=" size-4 mr-2"/>
          <Link to={`events`} className="font-semibold">Mis Eventos</Link>
        </li>

        <li className="flex flex-row items-center border p-2 rounded-lg dark:border-zinc-600 my-2">
        <CalendarDaysIcon className=" size-4 mr-2"/>
          <Link to={`events`} className="font-semibold">Mis Eventos</Link>
        </li>

        <li className="flex flex-row items-center border p-2 rounded-lg dark:border-zinc-600 my-2">
        <ClockIcon className=" size-4 mr-2"/>
          <Link to={`events`} className="font-semibold">Mis Eventos</Link>
        </li>

        <li className="flex flex-row items-center border p-2 rounded-lg dark:border-zinc-600 my-2">
        <ClockIcon className=" size-4 mr-2"/>
          <Link to={`events`} className="font-semibold">Mis Eventos</Link>
        </li>
      </ul>
    </nav>
  );
};
