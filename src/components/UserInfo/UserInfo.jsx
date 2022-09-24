import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import axios from "../../axios";

import style from './userInfo.module.scss'

export const UserInfo = ({ data, render }) => {
  const navigate = useNavigate()

  let { id, first_name, last_name, age, is_free, books, created_at, updated_at } = data;
  created_at = created_at.slice(0, 10) + ' / ' + created_at.slice(11, 16);
  updated_at = updated_at.slice(0, 10) + ' / ' + updated_at.slice(11, 16);

  const removeBook = async (bookId) => {
    await axios.delete(`/users/books/${id}`, { data: { bookId } });
    render()
  }

  const removeUser = async () => {
    await axios.delete(`/users/${id}`);
    navigate('/users')
  }

  const updateUser = () => {
    navigate('/add-user', {
      state: {
        id, first_name, last_name, age, is_free
      }
    })
  }

  const addUserBook = () => {
    navigate(`/add-user-book/${id}`, {
      state: {
        books
      }
    })
  }

  const userBooks = !books[0] ? null : books.map(item => (
    <TableRow
      key={item.id}
      hover
      className={style.book}
      onClick={() => {
        removeBook(item.id)
      }}
    >
      <TableCell>
        {item.title}
      </TableCell>
      <TableCell>
        {item.author}
      </TableCell>
    </TableRow>
  ))

  return <div className={style.wrapper}>
    <div className={style.info}>
      <div className={style.top} >
        <h1><span>First Name:</span> {first_name}</h1>
        <h2><span>Last Name:</span> {last_name}</h2>
        <h2><span>Age:</span> {age} </h2>
        <h2><span>Is Free:</span> {is_free + ''} </h2>
        <h3><span>Created At:</span> {created_at}</h3>
        <h3><span>Updated At:</span> {updated_at}</h3>
      </div>

      <div className={style.btns}>
        <Button variant="contained" onClick={updateUser} >Update</Button>
        <Button variant="contained" color="error" onClick={removeUser} >Delete</Button>
      </div>
    </div>

    <div className={style.books}>
      <div className={style.books__header}>
        <h2>Books</h2>
        <Button variant="contained" onClick={addUserBook} >Add Book</Button>
      </div>
      <TableContainer sx={{ height: 370, overflow: 'scroll' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }} >Title</TableCell>
              <TableCell sx={{ fontWeight: 600 }} >Author</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {userBooks}
          </TableBody>
        </Table>

      </TableContainer>
    </div>
  </div>
};
