// src/DataFetcher.js
import React, { useEffect, useState } from 'react';
import './DataFethcer.module.css'

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>()

  useEffect(() => {
    // Reemplaza 'https://api.example.com/data' con la URL de tu API
    fetch('https://api.restful-api.dev/objects')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch((error:any) => {
        setError(error);
        setLoading(false);
      });
  }, []); // El array vacío [] significa que este efecto se ejecutará una sola vez después del montaje del componente

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map((item: any, index: any) => (
          <li key={index}>{item.name}</li> // Ajusta el renderizado según la estructura de tus datos
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
