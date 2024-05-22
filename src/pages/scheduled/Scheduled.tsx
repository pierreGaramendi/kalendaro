import { Counter1 } from "../../usecases/components/custome-hook/Counter";
import { useCounter } from "../../usecases/components/custome-hook/useCounter";
import { Button } from "@headlessui/react";
import { PlusCircleIcon } from "@heroicons/react/16/solid";
import { Item } from "./Item";

const ScheduledEvents = () => {
  const { count, increment } = useCounter();
  return (
    <div className="flex flex-col px-4">
      <div className="flex flex-row justify-between py-6">
        <h1 className="text-2xl font-bold">Reuniones programadas</h1>
        <Button className="inline-flex items-center gap-2 rounded-md bg-blue-600 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-blue-500 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          <PlusCircleIcon className="size-5 fill-white" />
          Crear Reunion
        </Button>
      </div>
      <div>
        <div className="overflow-x-auto shadow-md bg-gray-50 dark:bg-zinc-800 dark:text-gray-400">
          <div className="my-2 text-gray-700 rounded-lg bg-gray-50 dark:bg-zinc-900 dark:text-gray-400 flex flex-row">
            <div className="px-6 py-3">Product name</div>
            <div className="px-6 py-3">Color</div>
            <div className="px-6 py-3">Category</div>
            <div className="px-6 py-3">Price</div>
            <div className="px-6 py-3">Action</div>
          </div>
          <div className="my-2">
            <Item />
          </div>
          <div className="my-2">
            <Item />
          </div>
          <div className="my-2">
            <Item />
          </div>
          <div className="my-2">
            <Item />
          </div>
          <div className="my-2">
            <Item />
          </div>
        </div>
        {/*<Counter1 count={count} increment={increment} />
        <DataFetcher /> */}
      </div>
    </div>
  );
};

export { ScheduledEvents };
