import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton, Alert, Paper } from "@mui/material";

import style from './user.module.scss'
import { useEffect } from "react";
import { fetchUser } from "../../redux/slices/users";
import { UserInfo } from "../../components";

export const User = () => {

  const { id } = useParams();
  const dispatch = useDispatch()

  const users = useSelector(store => store.users);
  const { user, status } = users
  const isUserLoading = status === 'loading';
  const isUserError = status === 'error';

  const getUser = () => {
    dispatch(fetchUser(id))
  }

  useEffect(() => {
    getUser()
  }, [])

  const error = isUserError ? <Alert severity="error">Error !</Alert> : null;
  const loading = isUserLoading ?
    <Skeleton variant="rectangular" width={'100%'} height={300} /> : null;
  const info = !user ? null : isUserError ? null : isUserLoading ? null :
    <UserInfo data={user} render={getUser} />

  return <div className={style.user}>
    <div className="container">
      <Paper >
        {loading}
        {error}
        {info}
      </Paper>
    </div>
  </div >
};
