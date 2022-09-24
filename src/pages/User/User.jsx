import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Paper,
  TableHead,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableBody,
  Button
} from "@mui/material";

import style from './user.module.scss'

export const User = () => {

  const { id } = useParams();

  const removeBook = (bookId) => {
    console.log({ id, bookId });
  }

  const books = [
    { id: 1, title: 'War and Peac', author: 'Lev Tolstoi' },
    { id: 2, title: 'Jamila', author: 'Chyngyz Aitmatov' },
  ]

  return <div className={style.user}>
    <div className="container">
      <Paper >
        <div className={style.wrapper}>
          <div className={style.info}>
            <div className={style.top} >
              <h1><span>First Name:</span> Nurbolot</h1>
              <h2><span>Last Name:</span> Boobekv</h2>
              <h2><span>Age:</span> 21 </h2>
              <h3><span>Created At:</span> 2022.12.02 12:54</h3>
              <h3><span>Updated At:</span> 2022.12.02 19:35</h3>
            </div>

            <div className={style.btns}>
              <Button variant="contained">Update</Button>
              <Button variant="contained" color="error">Delete</Button>
            </div>
          </div>

          <div className={style.books}>
            <div className={style.books__header}>
              <h2>Books</h2>
              <Link to="/add-user-book" >
                <Button variant="contained" >Add Book</Button>
              </Link>
            </div>
            <TableContainer sx={{ height: 350, overflow: 'scroll' }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600 }} >Title</TableCell>
                    <TableCell sx={{ fontWeight: 600 }} >Author</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {books.map(item => (
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
                  ))}
                </TableBody>
              </Table>

            </TableContainer>
          </div>
        </div>
      </Paper>
    </div>
  </div>
};
