import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { UsersRow } from "../../components";

import style from './users.module.scss'
import { fetchUsers } from "../../redux/slices/users";

export const Users = () => {
  const dispath = useDispatch()
  const navigate = useNavigate()

  const columns = [
    { id: 'first_name', label: 'First Name', minWidth: 140 },
    { id: 'last_name', label: 'Last Name', minWidth: 140 },
    { id: 'age', label: 'Age', minWidth: 70 },
    { id: 'books', label: 'Books', minWidth: 270 },
    { id: 'created_at', label: 'Created At', minWidth: 120 },
    { id: 'updated_at', label: 'Updated At', minWidth: 120 },
  ];


  const users = useSelector(store => store.users);
  const isUsersLoading = users.status === 'loading'
  const isUsersError = users.status === 'error'

  useEffect(() => {
    dispath(fetchUsers())
  }, [])

  const usersInfo = isUsersError ? null : isUsersLoading ? null : users.items.map((item) => {
    return (
      <TableRow
        hover
        key={item.id}
        sx={{ cursor: 'pointer' }}
        onClick={() => {
          navigate(`/users/${item.id}`)
        }}
      >
        <UsersRow columns={columns} item={item} />

      </TableRow>
    )
  })

  return <section className={style.home}>
    <div className="container">
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <div className={style.header}>
          <h1>Users</h1>
          <Link to='/add-user' >
            <Button variant="contained" >
              Add User
            </Button>
          </Link>
        </div>
        <TableContainer sx={{ maxHeight: 400, overflow: 'scroll' }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ fontWeight: 600 }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>

              {usersInfo}

            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  </section>
};
