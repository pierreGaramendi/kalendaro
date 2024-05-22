import GoogleLogoSVG from "../../assets/google_logo.svg";
import { useGoogleLogin } from "@react-oauth/google";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const LoginGoogleButton = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Verifica si el usuario está autenticado
    axios
      .get("http://localhost:4000/profile", { withCredentials: true })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log("No hay usuario autenticado");
      });
  }, []);

  const handleLogin = () => {
    const w = window.open("http://localhost:4000/auth/google", "_blank","height=550,width=450,scrollbars=no");
    if (w) {
      w.focus(); // okay now
    }
    //window.open('http://localhost:4000/auth/google', '_self');
  };

  const handleLogout = () => {
    axios
      .get("http://localhost:5000/logout", { withCredentials: true })
      .then((response) => {
        setUser(null);
      });
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <a
      className="border mb-3 flex w-full items-center justify-center rounded-lg bg-primary px-4 pb-2 pt-2 text-center text-sm font-medium leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
      href="#!"
      role="button"
      data-twe-ripple-init
      data-twe-ripple-color="light"
      onClick={handleLogin}
    >
      <img
        src={GoogleLogoSVG}
        style={{ height: 31, width: 14 }}
        alt="website logo"
        className="mr-2"
      />
      Continue with Google
    </a>
  );
};
