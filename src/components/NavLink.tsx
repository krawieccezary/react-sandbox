import React, { FunctionComponent, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

type NavLinkProps = {
  to: string,
  isOpen: boolean,
  setIsOpen: Function,
}

const NavLink: FunctionComponent<NavLinkProps> = ({ children, to, isOpen, setIsOpen }) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>):void => setIsOpen(!isOpen);

  return (
    <Link onClick={handleClick} className="p-5 text-white hover:text-blue-500 transition-colors" to={to}>{children}</Link>
  )
}

export default NavLink;