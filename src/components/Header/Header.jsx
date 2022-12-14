import React from "react";
import { Link, NavLink } from "react-router-dom";

import style from './header.module.scss';

export const Header = () => {

  const linkClass = style.link
  const activeLinkClass = `${style.link} ${style.active}`

  return <header className={style.header}>
    <div className="container">
      <div className={style.wrapper}>
        <Link to='/' className={style.logo}>Logo</Link>

        <nav className={style.nav}>
          <NavLink
            to='/users'
            className={({ isActive }) =>
              isActive ? activeLinkClass : linkClass
            }>
            Users
          </NavLink>
          <NavLink
            to='/books'
            className={({ isActive }) =>
              isActive ? activeLinkClass : linkClass
            }>
            Books
          </NavLink>
        </nav>
      </div>
    </div>
  </header>
};
