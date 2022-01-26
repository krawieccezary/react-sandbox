import React, { FunctionComponent } from 'react';

type MenuBurgerProps = {
  setIsOpen: Function,
  isOpen: boolean,
}

const MenuBurger: FunctionComponent<MenuBurgerProps> = ({ setIsOpen, isOpen }) => {

  return (
    <button className="flex w-10 h-10 flex-col absolute top-5 right-5 z-10" onClick={() => setIsOpen(!isOpen)}>
      <span className="block bg-white w-10 h-2 rounded-md my-1"></span>
      <span className="block bg-white w-10 h-2 rounded-md my-1"></span>
      <span className="block bg-white w-10 h-2 rounded-md my-1"></span>
    </button> 
  )
}

export default MenuBurger;