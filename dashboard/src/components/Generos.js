import React from 'react'
import { useState, useEffect } from 'react';

export const Generos = () => {

  const [generos, setGeneros] = useState([]);

  useEffect(() => {
      console.log('%cse monto el componente', 'color: green');
      fetch('http://localhost:3001/api/generos')
          .then(response => response.json())
          .then(data => {
            setGeneros(data.data)
          })
          .catch(error => console.error(error));
  }, [])

  useEffect(() => {
      console.log('%cse actualizo el componente', 'color: yellow');
  }, [generos])

  useEffect(() => {
      return () => console.log('%cse desmonto el componente', 'color: red');
  }, [])

  return (
    <>
      <h2>Listado de generos</h2>
      <ul>
        {
          generos.map((genero, i) => {
            return (
                <ul key={i}>
                    <h3 className='genero'> {genero.nombre}  </h3>
                    <div className='juegos'>
                      {
                        genero.games.map( game => {
                          return (
                            <li>
                              <p> {game.nombre} </p>
                              <img src={"http://localhost:3001"+game.imagenLogo} width='150' />
                            </li>
                          )
                        })
                      }
                    </div>
                </ul>
            )
        })
        }
      </ul>
    </>
  )
}
