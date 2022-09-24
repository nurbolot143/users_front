import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Paper, Skeleton } from "@mui/material";

import { fetchBook } from "../../redux/slices/books";
import { BookInfo } from "../../components";

import style from './book.module.scss'

export const Book = () => {

  const dispatch = useDispatch()
  const { id } = useParams()
  const books = useSelector(store => store.books)

  const { book, status } = books;
  const isLoading = status === 'loading'
  const isError = status === 'error'

  useEffect(() => {
    dispatch(fetchBook(id))
  }, [])

  const error = isError ? <Alert severity="error">Error !</Alert> : null;
  const loading = isLoading ?
    <Skeleton variant="rectangular" width={'100%'} height={300} /> : null;

  const bookInfo = !book ? null : isLoading ? null : isError ? null : <BookInfo data={book} />

  return <section className={style.book}>
    <div className={style.container}>
      <Paper>
        <div className={style.wrapper}>
          {bookInfo}
          {loading}
          {error}
        </div>
      </Paper>
    </div>
  </section>
};
