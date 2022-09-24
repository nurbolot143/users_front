import React from "react";
import { Button, Paper } from "@mui/material";


import style from './book.module.scss'

export const Book = () => {
  return <section className={style.book}>
    <div className={style.container}>
      <Paper>
        <div className={style.wrapper}>
          <div className={style.info}>
            <div className={style.top} >
              <h1><span>Title:</span> War and Peace</h1>
              <h2><span>Author:</span> Lev Tolstoi</h2>

              <h3><span>Created At:</span> 2022.12.02 12:54</h3>
              <h3><span>Updated At:</span> 2022.12.02 19:35</h3>
            </div>

            <div className={style.btns}>
              <Button variant="contained">Update</Button>
              <Button variant="contained" color="error">Delete</Button>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  </section>
};
