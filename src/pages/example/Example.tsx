import { useCounter } from "../../usecases/components/custome-hook/useCounter";
import { Counter1 } from "../../usecases/components/custome-hook/Counter";
import DataFetcher from "../../usecases/components/data-fetcher/DataFethcer";
import { KButton } from "../../usecases/components/custom/Button/KButton";
import { CalendarIcon } from "@heroicons/react/16/solid";

export const Example = () => {
  const { count, increment } = useCounter();

  const handleMouseEnter = () => {
    //setIsHovered(true);

    alert("Mouse entered!");
    // Aquí puedes ejecutar cualquier otra función
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        {/*         <div className="m-4">
          <button className="bg-blue-500 transition transform hover:bg-blue-700 text-white font-bold py-2 px-4 rounded active:scale-95">
            Button
          </button>
        </div>

        <div className="m-4">
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded transition transform hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 active:scale-95">
            Click me
          </button>
        </div>

        <div className="m-4">
          <button
            disabled
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded transition transform hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 active:scale-95"
          >
            Disable
          </button>
        </div> */}

        <div className="m-4 flex flex-row">
          <KButton
            variant="normal"
            className="flex flex-row justify-center items-center"
          >
            <CalendarIcon className=" size-4 mr-2" />
            Normal Button
          </KButton>

          <KButton variant="disabled" disabled>
            Disabled Button
          </KButton>
          <KButton variant="clear">Clear Button</KButton>
          <KButton variant="outline">Outline Button</KButton>
          <KButton variant="solid">Solid Button</KButton>
        </div>
      </div>
      <Counter1 count={count} increment={increment} />
      <DataFetcher />
    </div>
  );
};
