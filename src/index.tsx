import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AppRoutes } from "./routes/Routes";
import { AuthProvider } from "./drivers/services/useAuth";

const router = AppRoutes();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <GoogleOAuthProvider clientId="187000713921-ut98s802e6grc4vj6bgvuuh104st0css.apps.googleusercontent.com">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);

reportWebVitals();
