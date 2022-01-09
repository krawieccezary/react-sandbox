import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

type NavLinkProps = {
  to: string
}

const NavLink: FunctionComponent<NavLinkProps> = ({ children, to }) => (
  <Link className="p-5 text-white hover:text-blue-500 transition-colors" to={to}>{children}</Link>
)

export default NavLink;