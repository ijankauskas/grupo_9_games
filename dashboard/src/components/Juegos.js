import React from 'react'
import { useState, useEffect } from 'react';

export const Juegos = () => {

  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
      console.log('%cse monto el componente', 'color: green');
      fetch('http://localhost:3001/api/productos')
          .then(response => response.json())
          .then(data => {
            setJuegos(data.data)
          })
          .catch(error => console.error(error));
  }, [])

  useEffect(() => {
      console.log('%cse actualizo el componente', 'color: yellow');
  }, [juegos])

  useEffect(() => {
      return () => console.log('%cse desmonto el componente', 'color: red');
  }, [])

  return (
    <>
      <h2>Listado de juegos</h2>
      <ul>
        {
          juegos.map((juego, i) => {
            return (
                <ul key={i}>
                    <h3> {juego.nombre}  </h3>
                    <img src={"http://localhost:3001"+juego.imagenLogo} width='150' />
                    <p> {juego.genre.nombre} </p>
                </ul>
            )
        })
        }
      </ul>
    </>
  )
}
