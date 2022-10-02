import React from 'react'
import { Generos } from './Generos'
import { Home } from './Home'
import { Juegos } from './Juegos'
import { Usuarios } from './Usuarios'

import { Route } from 'react-router-dom'


export const Body = () => {
  return (
    <>
      <Route path='/' exact={true} component={Home}/>
      <Route path='/juegos' component={Juegos}/>
      <Route path='/usuarios' component={Usuarios}/>
      <Route path='/generos' component={Generos}/>
    </>
  )
}
