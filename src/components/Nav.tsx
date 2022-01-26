import React, { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import NavLink from './NavLink';

type NavProps = {
  setIsOpen: Function,
  isOpen: boolean,
}

const Nav:FunctionComponent<NavProps> = ({ setIsOpen, isOpen }) => (
  <motion.nav className="flex flex-col"
    initial={{ x: '10%', opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: .2, duration: 1 }}
  >
    <NavLink setIsOpen={setIsOpen} isOpen={isOpen} to="/">Home</NavLink>
    <NavLink setIsOpen={setIsOpen} isOpen={isOpen} to="/todo-app">Todo App</NavLink>
    <NavLink setIsOpen={setIsOpen} isOpen={isOpen} to="/weather-app">Weather App</NavLink>
  </motion.nav>
)


export default Nav;