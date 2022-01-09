import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';


const Nav = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/todo-app">Todo App</NavLink>
    <NavLink to="/weather-app">Weather App</NavLink>
  </nav>
)


export default Nav;