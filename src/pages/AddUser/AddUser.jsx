import React from "react";
import { Paper, Typography, TextField, Button } from "@mui/material";

import style from './addUser.module.scss'
import { useForm } from "react-hook-form";

export const AddUser = () => {

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      age: 20
    },
    mode: 'onChange'
  })

  const onSubmit = async (data) => {
    console.log(data);
  }

  return <Paper classes={{ root: style.root }}>
    <Typography classes={{ root: style.title }} variant="h5">
      Create user
    </Typography>
    <form onSubmit={handleSubmit(onSubmit)}  >
      <TextField
        className={style.field}
        label="First Name"
        type='text'
        error={Boolean(errors.firstName?.message)}
        helperText={errors.firstName?.message}
        {...register('firstName', { required: "Peas enter first name." })}
        fullWidth
      />
      <TextField
        className={style.field}
        label="Last Name"
        type='text'
        error={Boolean(errors.lastName?.message)}
        helperText={errors.lastName?.message}
        {...register('lastName', { required: "Peas enter last name." })}
        fullWidth
      />
      <TextField
        className={style.field}
        label="Age"
        type='number'
        error={Boolean(errors.age?.message)}
        helperText={errors.age?.message}
        inputProps={{
          min: 1
        }}
        {...register('age', { required: "Peas enter age." })}
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
