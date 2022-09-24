import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookCart } from "../../components";

import style from './books.module.scss'

export const Books = () => {

  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/books/:${id}`)
  }

  return <section className={style.books}>
    <div className="container">
      <div className={style.header}>
        <h1>Books</h1>

        <Link to='/add-book' >
          <Button variant="contained" >
            Add Book
          </Button>
        </Link>
      </div>
      <div className={style.wrapper}>
        <BookCart handleClick={handleClick} />
        <BookCart handleClick={handleClick} />
        <BookCart handleClick={handleClick} />
        <BookCart handleClick={handleClick} />
        <BookCart handleClick={handleClick} />
      </div>
    </div>
  </section>
};
