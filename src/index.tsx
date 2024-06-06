import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AppRoutes } from "./routes/Routes";
import { AuthProvider } from "./drivers/services/auth/useAuth";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = AppRoutes();
const clientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID!;
console.log(clientId)
const Loading = () => <div>Loading...</div>;
const Error = () => <div>Error loading routes</div>;

root.render(
  <GoogleOAuthProvider clientId={clientId}>
    <React.StrictMode>
      <AuthProvider>
        <React.Suspense fallback={<Loading />}>
          <RouterProvider router={router} fallbackElement={<Error />} />
        </React.Suspense>
      </AuthProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
