import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ArchiveBoxXMarkIcon,
  Square2StackIcon,
  TrashIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import { useAuth } from "../../../../../drivers/services/useAuth";

const Avatar = () => {
  const { logout } = useAuth();

  const handleClick = () => {
    logout();
  };

  return (
    <div className="order-1">
      <Menu>
        <MenuButton className="">
          <img
            id="avatarButton"
            data-dropdown-toggle="userDropdown"
            data-dropdown-placement="bottom-start"
            className="w-10 h-10 rounded-full cursor-pointer"
            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
            alt="User dropdown"
          />
        </MenuButton>
        <MenuItems
          anchor="bottom end"
          className="w-60 rounded-lg shadow dark:bg-zinc-700 text-white p-1"
        >
          <MenuItem>
            <button className="group text-base flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <UserIcon className="size-4" />
              <div>
                <div className="text-left"> Pierre Garamendi M</div>
                <div className="text-xs">pierre.garamendi@gmail.com</div>
              </div>
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <Square2StackIcon className="size-4" />
              Settings
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                ⌘D
              </kbd>
            </button>
          </MenuItem>

          <MenuItem>
            <button className="group flex w-full items-center rounded-lg gap-2 py-1.5 px-3 data-[focus]:bg-white/10">
              <ArchiveBoxXMarkIcon className="size-4" />
              Archive
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                ⌘A
              </kbd>
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button
              className="group flex w-full items-center gap-2 py-1.5 rounded-lg px-3 data-[focus]:bg-white/10"
              onClick={handleClick}
            >
              <TrashIcon className="size-4" />
              Logout
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                ⌘D
              </kbd>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};

export { Avatar };
