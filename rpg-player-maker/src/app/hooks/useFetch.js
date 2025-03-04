import { useState, useEffect } from "react";

export function useFetch(endpoint) {
  const [data, setData] = useState([]); //estado para guardar los datos de la API
  const [loading, setLoading] = useState(true); //estado para indicar si esta cargando
  const [error, setError] = useState(null); //estado para manejar los errores

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint); //hacemos la peticion get a la AOI
        if (!response.ok) {
          throw new Error(`Error al cargar ${endpoint}`); // verificamos posible error
        }
        const result = await response.json(); //pasamos a JSON la respuesta
        setData(result); //guarados los datos en el estado
      } catch (error) {
        setError(error.message); //si hubiese un error lo guardamos en el estado
      } finally {
        setLoading(false); //quitamos el estado de carga ya sea exito o error
      }
    };
    fetchData(); //llamamos a la funcion para ejecutar la peticion
  }, [endpoint]); //cuando cambia se ejecuta
  return { data, loading, error }; //devolvemos ñps estados para usarlos en el componente
}
