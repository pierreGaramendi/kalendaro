import { Item } from "./components/Item";
import { URL_MY_EVENTS } from "../../drivers/services/constants/ConstantsApisUrls";
import { Filters } from "./components/Filters";
import { Title } from "./components/Title";
import { useAxios } from "../../drivers/services/http/useAxios";

export const ScheduledEvents = () => {
  const { data, loading, error } = useAxios(URL_MY_EVENTS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col px-4">
      <Title />
      <div className="overflow-x-auto shadow-md bg-gray-50 dark:bg-zinc-800 dark:text-gray-400">
        <Filters />
        {data &&
          data.map((item: any) => (
            <div className="my-2">
              <Item data={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

