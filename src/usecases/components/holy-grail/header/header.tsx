import { Search } from "./components/Search";
import { Avatar } from "./components/Avatar";

export const Topbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-zinc-900 border-b dark:border-zinc-600">
      <div className="flex flex-wrap items-center justify-between mx-auto px-6 py-2">
        <Search />
        <Avatar />
      </div>
    </nav>
  );
};
