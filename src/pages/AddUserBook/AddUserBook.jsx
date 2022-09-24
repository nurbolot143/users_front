import React from "react";
import { useNavigate } from "react-router-dom";
import { BookCart } from "../../components";

import style from './addUserBook.module.scss'

export const AddUserBook = () => {

  const navigate = useNavigate()

  const handleClick = (id) => {
    console.log(id);

    navigate('/users/:2')
  }

  return <section className={style.addBook}>
    <div className="container">
      <div className={style.wrapper}>
        <BookCart handleClick={handleClick} />
        <BookCart handleClick={handleClick} />
        <BookCart handleClick={handleClick} />
      </div>
    </div>
  </section>
};
