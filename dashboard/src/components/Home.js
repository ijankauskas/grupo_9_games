import React from 'react'
import '../assets/css/style-Home.css'
import { useState, useEffect } from 'react';
import '../assets/css/style.css'


export const Home = () => {

  const [juegos, setJuegos] = useState([]);
  const [lastJuegos, setLastJuegos] = useState([]);
  const [usuarios, setusuarios] = useState([]);
  const [lastUsuarios, setlastUsuarios] = useState([]);
  const [generos, setGeneros] = useState([]);


  useEffect(() => {
      console.log('%cse monto el componente', 'color: green');
      fetch('http://localhost:3001/api/productos')
          .then(response => response.json())
          .then(data => {
            setJuegos(data.data)
            setLastJuegos(data.data[data.data.length - 1])
          })
          .catch(error => console.error(error));
  }, [])

  useEffect(() => {
    console.log('%cse monto el componente', 'color: green');
    fetch('http://localhost:3001/api/usuarios')
        .then(response => response.json())
        .then(data => {
          setusuarios(data.data)
          setlastUsuarios(data.data[data.data.length - 1])

        })
        .catch(error => console.error(error));
  }, [])

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
  }, [juegos])

  useEffect(() => {
      return () => console.log('%cse desmonto el componente', 'color: red');
  }, [])

  console.log(lastJuegos);

  return (
    <>
      <div className='body'>
        <h1>Total</h1>
        <div className='dashboard'>
          <div className='box'>
            <p>Juegos:</p>
            <p> { juegos.length } </p>
          </div>
          <div className='box'>
            <p>Usuarios:</p>
            <p> { usuarios.length } </p>
          </div>
          <div className='box'>
            <p>Generos:</p>
            <p> { generos.length } </p>
          </div>
        </div>
      </div>
      <h2>Ultimo producto agregado</h2>
      <p> {lastJuegos.nombre} </p>
      <img src={"http://localhost:3001"+lastJuegos.imagenLogo} width='150' />
      <h2>Ultimo usuario creado</h2>
      <p> {lastUsuarios.nombre} </p>
      <img src={"http://localhost:3001"+lastUsuarios.avatar} width='150' />
    </>
  )
}
