import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Paper, Typography, TextField, Button } from "@mui/material";

import axios from "../../axios";

import style from './addBook.module.scss'

export const AddBook = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const update = location.state

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: {
      title: update ? location.state.title : '',
      author: update ? location.state.author : ''
    },
    mode: 'onChange'
  })

  const onSubmit = async (data) => {
    if (update) {
      await axios.put(`/books/${location.state.id}`, data)
      navigate(`/books/${location.state.id}`)
    } else {
      await axios.post('/books', data);
      navigate('/books')
    }
  }

  return <Paper classes={{ root: style.root }}>
    <Typography classes={{ root: style.title }} variant="h5">
      Create book
    </Typography>
    <form onSubmit={handleSubmit(onSubmit)}  >
      <TextField
        className={style.field}
        label="Title"
        type='text'
        error={Boolean(errors.title?.message)}
        helperText={errors.title?.message}
        {...register('title', { required: "Peas enter title." })}
        fullWidth
      />
      <TextField
        className={style.field}
        label="Author"
        type='text'
        error={Boolean(errors.author?.message)}
        helperText={errors.author?.message}
        {...register('author', { required: "Peas enter author." })}
        fullWidth
      />
      <Button
        type="submit"
        size="large"
        variant="contained"
        fullWidth>
        Submit
      </Button>
    </form>
  </Paper>
};
