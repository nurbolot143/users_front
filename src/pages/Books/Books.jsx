import { Button } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BookCart } from "../../components";
import { fetchBooks } from "../../redux/slices/books";

import style from './books.module.scss'

export const Books = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const books = useSelector(store => store.books)

  const isBooksLoading = books.status === 'loading'
  const isBooksError = books.status === 'error'

  const handleClick = (id) => {
    navigate(`/books/${id}`)
  }

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  const bookItems = isBooksLoading ? null : isBooksError ? null :
    books.items.map(item => <BookCart key={item.id} handleClick={handleClick} data={item} />)

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
        {bookItems}
      </div>
    </div>
  </section>
};
