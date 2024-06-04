import { createBrowserRouter } from "react-router-dom";
import { Sidebar } from "../usecases/components/holy-grail/sidebar/Sidebar";
import App from "../App";
import { ScheduledEvents } from "../pages/scheduled/Scheduled";
import { Login } from "../pages/login/Login";
import ProtectedRoute from "./Protectedroute";
import { Example } from "../pages/example/Example";

export const AppRoutes = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Sidebar />
          <App />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "events",
          element: (
            <ProtectedRoute>
              <ScheduledEvents />
            </ProtectedRoute>
          ),
        },
        {
          path: "example",
          element: (
            <ProtectedRoute>
              <Example />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
};
