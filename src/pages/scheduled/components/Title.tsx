import { Button } from "@headlessui/react";
import { PlusCircleIcon } from "@heroicons/react/16/solid";

export const Title = () => {
  return (
    <div className="flex flex-row justify-between py-6">
      <h1 className="text-2xl font-bold">Reuniones programadas</h1>
      <Button className="inline-flex items-center gap-2 rounded-md bg-blue-600 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-blue-500 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
        <PlusCircleIcon className="size-5 fill-white" />
        Crear Reunion
      </Button>
    </div>
  );
};

