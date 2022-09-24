import React from "react";
import { TableCell } from "@mui/material";

export const UsersRow = ({ columns, item }) => {
  return <>
    {columns.map((column) => {
      let value = item[column.id];

      if (Array.isArray(value)) {
        value = value[0] ? value.map(item => item.title).join(', ') : ''
        value = value.length > 35 ? `${value.slice(0, 35)} ...` : value;
      }

      return (
        <TableCell key={column.id} >
          {value}
        </TableCell>
      )
    })
    }
  </>
}


