import React from 'react'
import { useState, useEffect } from 'react';



export const Usuarios = () => {
  const [usuarios, setusuarios] = useState([]);

  useEffect(() => {
    console.log('%cse monto el componente', 'color: green');
    fetch('http://localhost:3001/api/usuarios')
        .then(response => response.json())
        .then(data => {
          setusuarios(data.data)
        })
        .catch(error => console.error(error));
  }, [])

  useEffect(() => {
    console.log('%cse actualizo el componente', 'color: yellow');
  }, [usuarios])

  useEffect(() => {
    return () => console.log('%cse desmonto el componente', 'color: red');
  }, [])

  return (
    <>
      <h2>Listado de usuarios</h2>
      <ul>
        {
          usuarios.map((usuario, i) => {
            return (
                <ul key={i}>
                    <h3> {usuario.nombre}  </h3>
                    <img src={"http://localhost:3001"+ usuario.avatar} width='150' />
                </ul>
            )
        })
        }
      </ul>
    </>
  )
}
