import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import ToolBar from '@mui/material/ToolBar';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from "@mui/material";

import { User } from "../../components";

import style from './users.module.scss'

export const Users = () => {

  const navigage = useNavigate()

  const columns = [
    { id: 'firstName', label: 'First Name', minWidth: 140 },
    { id: 'lastName', label: 'Last Name', minWidth: 140 },
    { id: 'age', label: 'Age', minWidth: 70 },
    { id: 'books', label: 'Books', minWidth: 270 },
    { id: 'createdAt', label: 'Created At', minWidth: 120 },
    { id: 'updatedAt', label: 'Updated At', minWidth: 120 },
  ];

  const data = [
    { id: 1, firstName: 'Nurbolot', lastName: 'Boobekov', age: 21, createdAt: '4840935', updatedAt: '49579754', books: 'dkjfos, fiojdsoi ...' },
    { id: 2, firstName: 'Nurbolot', lastName: 'Boobekov', age: 21, createdAt: '4840935', updatedAt: '49579754', books: 'dkjfos, fiojdsoi ...' },
    { id: 3, firstName: 'Nurbolot', lastName: 'Boobekov', age: 21, createdAt: '4840935', updatedAt: '49579754', books: 'dkjfos, fiojdsoi ...' },
    { id: 4, firstName: 'Nurbolot', lastName: 'Boobekov', age: 21, createdAt: '4840935', updatedAt: '49579754', books: 'dkjfos, fiojdsoi ...' },
    // { id: 5, firstName: 'Nurbolot', lastName: 'Boobekov', age: 21, createdAt: '4840935', updatedAt: '49579754', books: 'dkjfos, fiojdsoi ...' },
    // { id: 6, firstName: 'Nurbolot', lastName: 'Boobekov', age: 21, createdAt: '4840935', updatedAt: '49579754', books: 'dkjfos, fiojdsoi ...' },
    // { id: 7, firstName: 'Nurbolot', lastName: 'Boobekov', age: 21, createdAt: '4840935', updatedAt: '49579754', books: 'dkjfos, fiojdsoi ...' },
  ]

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
              {
                data.map((item) => {
                  return (
                    <TableRow
                      hover
                      key={item.id}
                      sx={{ cursor: 'pointer' }}
                      onClick={() => {
                        navigage(`/users/:${item.id}`)
                      }}
                    >
                      {columns.map((column) => {
                        const value = item[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      })}

                    </TableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  </section>
};
