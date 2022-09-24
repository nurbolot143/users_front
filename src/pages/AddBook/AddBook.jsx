import React from "react";
import { Paper, Typography, TextField, Button } from "@mui/material";

import style from './addBook.module.scss'
import { useForm } from "react-hook-form";

export const AddBook = () => {

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: {
      title: '',
      author: ''
    },
    mode: 'onChange'
  })

  const onSubmit = async (data) => {
    console.log(data);
  }

  return <Paper classes={{ root: style.root }}>
    <Typography classes={{ root: style.title }} variant="h5">
      Create book
    </Typography>
    <form onSubmit={handleSubmit(onSubmit)}  >
      <TextField
        className={style.field}
        label="First Name"
        type='text'
        error={Boolean(errors.title?.message)}
        helperText={errors.title?.message}
        {...register('title', { required: "Peas enter title." })}
        fullWidth
      />
      <TextField
        className={style.field}
        label="Last Name"
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
