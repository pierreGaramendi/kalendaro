import { PlusCircleIcon } from "@heroicons/react/16/solid";
import { KButton } from "../../../usecases/components/custom/Button/KButton";

export const Title = () => {
  return (
    <div className="flex flex-row justify-between py-6 items-center">
      <h1 className="text-2xl font-bold">Reuniones programadas</h1>
      <KButton
        variant="normal"
        className="flex flex-row justify-center items-center"
      >
        <PlusCircleIcon className="size-5 fill-white mr-2" />
        Crear Reunion
      </KButton>
    </div>
  );
};
