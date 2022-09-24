import React from "react";

import style from './bookCart.module.scss'

export const BookCart = ({ handleClick, data }) => {

  let { id, title, author, created_at, updated_at } = data;
  created_at = created_at.slice(0, 10) + ' / ' + created_at.slice(11, 16);
  updated_at = updated_at.slice(0, 10) + ' / ' + updated_at.slice(11, 16);

  return <div className={style.body} onClick={() => {
    handleClick(id)
  }} >
    <div className={style.wrapper}>
      <div className={style.info}>
        <span> Title </span>{title}
      </div>
      <div className={style.info}>
        <span> Author </span>{author}
      </div>

      <div className={style.date}>
        <p>Created at:
          <span>
            {created_at}
          </span>
        </p>
        <p>Updated at:
          <span>
            {updated_at}
          </span>
        </p>
      </div>
    </div>
  </div>
};
