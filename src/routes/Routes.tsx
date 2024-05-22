import { createBrowserRouter } from "react-router-dom";
import { Sidebar } from "../usecases/components/holy-grail/sidebar/Sidebar";
import App from "../App";
import { ScheduledEvents } from "../pages/scheduled/Scheduled";
import { Login } from "../pages/login/Login";

export const AppRoutes = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Sidebar />
          <App />
        </>
      ),
      children: [
        {
          path: "events",
          element: <ScheduledEvents />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
};
