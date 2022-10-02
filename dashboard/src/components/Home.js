import React from 'react'
import '../assets/css/style-Home.css'

export const Home = () => {
  return (
    <>
      <div className='body'>
        <h1>Total</h1>
        <div className='dashboard'>
          <div className='box'>
            <p>Juegos:</p>
            <p>Cantidad total</p>
          </div>
          <div className='box'>
            <p>Usuarios:</p>
            <p>Cantidad total</p>
          </div>
          <div className='box'>
            <p>Generos:</p>
            <p>Cantidad total</p>
          </div>
        </div>
      </div>

    </>
  )
}
