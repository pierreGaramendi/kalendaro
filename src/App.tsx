import Header from "./usecases/components/holy-grail/header/header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container ">
      <Header title="Kalendar" />
      <main className="text-white content px-4 dark:bg-zinc-800">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
