import React from "react";
import { Link } from "react-router-dom";

import style from './bookCart.module.scss'

export const BookCart = ({ handleClick }) => {

  const id = 1;

  return <div className={style.body} onClick={() => {
    handleClick(id)
  }} >
    <div className={style.wrapper}>
      <div className={style.info}>
        <span> Title </span>War and Peace
      </div>
      <div className={style.info}>
        <span> Author </span>Lev Tolstoi
      </div>

      <div className={style.date}>
        <p>Created at: <span> 22.12.01 13:30</span></p>
        <p>Updated at: <span>22.12.01 15:13</span> </p>
      </div>
    </div>
  </div>
};
