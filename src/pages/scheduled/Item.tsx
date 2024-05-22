import {
  UserIcon,
  ClockIcon,
  ChevronRightIcon,
} from "@heroicons/react/16/solid";

const Item = () => {
  return (
    <div className="bg-white border dark:bg-zinc-900 dark:border-zinc-700 sm:rounded-lg">
      <div className="border-b px-6 py-3 dark:border-gray-700 font-bold text-gray-900 whitespace-nowrap dark:text-white">
        Monday, 20 May 2024
      </div>
      <div className="flex flex-row">
        <div className="px-6 py-4 flex flex-row">
          <div className="flex items-center pr-1">
            <ClockIcon className=" size-4"/>
          </div>
          <div>15:30 - 16:00</div>
        </div>
        <div className="px-6 py-4 font-bold">
          pierre garamendi One-off Meeting One-off meeting
        </div>
        <div className="px-6 py-4 flex flex-row">
          <div className="flex items-center pr-1">
            <UserIcon className="size-4 fill-white/30" />
          </div>
          <div>3</div>
        </div>
        <div className="px-6 py-4 flex flex-row">
          <div className="flex items-center pr-1">
            <ChevronRightIcon className="size-4 fill-white/30" />
          </div>
          <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export { Item };
