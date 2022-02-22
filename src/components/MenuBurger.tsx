import React, { FunctionComponent } from 'react';

type MenuBurgerProps = {
  setIsOpen: Function,
  isOpen: boolean,
}

const lineStyle = 'block bg-white w-10 h-1 rounded-md my-1 origin-right transition-transform duration-300';

const MenuBurger: FunctionComponent<MenuBurgerProps> = ({ setIsOpen, isOpen }) => {

  return (
    <button aria-label="MenuBurgerButton" className="flex w-10 h-10 flex-col absolute top-5 right-5 z-20 justify-between" onClick={() => setIsOpen(!isOpen)}>
      <span className={`${lineStyle} ${isOpen ? '-rotate-45' : 'rotate-0'}`}></span>
      <span className={`${lineStyle} transition-all ${isOpen ? 'opacity-0 duration-100' : 'opacity-100 duration-500'}`}></span>
      <span className={`${lineStyle} ${isOpen ? 'rotate-45' : 'rotate-0'}`}></span>
    </button> 
  )
}

export default MenuBurger;