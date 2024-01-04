import React from 'react'
import { Route, Navigate, Routes } from 'react-router-dom'
import Admin from '../containers/Admin/Order/index.js' 

import PropTypes from 'prop-types'


export const PrivateRoute = () => {
 const user = JSON.parse(localStorage.getItem( 'NomeDaMykay:paraidentificar'))
 if(user && user.admin){
  return true
 }
  return false 
}

PrivateRoute.propTypes = {
component: PropTypes.oneOfType( [PropTypes.func, PropTypes.element]),
isAdmin: PropTypes.bool
}

export const Root = () => {
  const user = JSON.parse(localStorage.getItem( 'NomeDaMykay:paraidentificar'))
  if(user){
  return true
  }
    return false
}
