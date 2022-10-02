import React from 'react'
import '../assets/css/style-Navbar.css'

import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
        <ul className='navbar'>
            <li>
                <Link to='/' >Home</Link>
            </li>
            <li>
                <Link to='/juegos' >Juegos</Link>
            </li>
            <li>
                <Link to='/usuarios' >Usuarios</Link>
            </li>
            <li>
                <Link to='/generos' >Generos</Link>
            </li>
        </ul>
    </>
  )
}

export default Navbar