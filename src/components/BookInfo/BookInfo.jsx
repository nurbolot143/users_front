import React from "react";
import { Button } from "@mui/material";

import style from './bookInfo.module.scss'
import { useNavigate } from "react-router-dom";

import { AddBook } from "../../pages";
import axios from "../../axios";

export const BookInfo = ({ data }) => {
  let { id, title, author, created_at, updated_at } = data;
  created_at = created_at.slice(0, 10) + ' / ' + created_at.slice(11, 16);
  updated_at = updated_at.slice(0, 10) + ' / ' + updated_at.slice(11, 16);

  const navigate = useNavigate()

  const removeBook = async () => {
    await axios.delete(`/books/${id}`);
    navigate('/books')
  }

  const updateBook = () => {
    navigate('/add-book', {
      state: {
        id,
        title,
        author
      }
    })
  }

  return <div className={style.info}>
    <div className={style.top} >
      <h1><span>Title:</span> {title}</h1>
      <h2><span>Author:</span>{author}</h2>

      <h3><span>Created At:</span> {created_at}</h3>
      <h3><span>Updated At:</span> {updated_at}</h3>
    </div>

    <div className={style.btns}>
      <Button variant="contained" onClick={updateBook} >Update</Button>
      <Button variant="contained" color="error" onClick={removeBook} >Delete</Button>
    </div>
  </div>
};
