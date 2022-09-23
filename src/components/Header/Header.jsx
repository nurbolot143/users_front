import React from "react";
import { Link, NavLink } from "react-router-dom";

import style from './header.module.scss';

export const Header = () => {

  const linkClass = style.link
  const activeLinkClass = `${style.link} ${style.active}`

  return <header className={style.header}>
    <div className="container">
      <div className={style.wrapper}>
        <Link to='/home' className={style.logo}>Logo</Link>

        <nav className={style.nav}>
          <NavLink
            to='/home'
            className={({ isActive }) =>
              isActive ? activeLinkClass : linkClass
            }>
            Home
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
