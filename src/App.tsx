import Header from "./usecases/components/holy-grail/header/header";
import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/user', { withCredentials: true })
      .then(response => setUser(response.data))
      .catch(() => setUser(null));
  }, []);

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
