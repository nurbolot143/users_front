import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { Paper, Typography, TextField, Button, RadioGroup, FormControlLabel, Radio } from "@mui/material";

import axios from "../../axios";

import style from './addUser.module.scss'

export const AddUser = () => {
  const navigate = useNavigate()
  const location = useLocation();

  const update = location.state;

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: {
      firstName: update ? location.state.first_name : '',
      lastName: update ? location.state.last_name : '',
      age: update ? location.state.age : 20,
      isFree: update ? location.state.is_free : false
    },
    mode: 'onChange'
  })

  const onSubmit = async (data) => {
    if (update) {
      await axios.put(`/users/${location.state.id}`, data);
      navigate(`/users/${location.state.id}`)
    } else {
      await axios.post('/users', data)
      navigate('/users')
    }
  }

  return (
    <Paper classes={{ root: style.root }}>
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
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={false}
          {...register('isFree')}
          name="isFree"
        >
          <FormControlLabel value={true} control={<Radio />} label="True" />
          <FormControlLabel value={false} control={<Radio />} label="False" />
        </RadioGroup>
        <Button
          type="submit"
          size="large"
          variant="contained"
          fullWidth>
          Submit
        </Button>
      </form>
    </Paper>)
};
