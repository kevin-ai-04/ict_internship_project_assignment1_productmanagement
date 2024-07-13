import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';


const ProductTable = () => {
  const [rows,setRows]=useState([]);
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((res)=>{
      console.log(res)
      setRows(res.data)
    })
  })

  return (
    <TableContainer component={Paper}>
      <Table sx={{width:'90%', minWidth: 800 }} aria-label="simple table" className='ProductTable'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="left">Rating</TableCell>
            <TableCell align="left">count</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell className="categoryColumn">{row.category}</TableCell>
  <TableCell align="center">
    <img src={row.image} alt={row.title} style={{height: '90px', objectFit: 'cover' }} />
  </TableCell>
              <TableCell align="left">{row.rating.rate}</TableCell>
              <TableCell align="left">{row.rating.count}</TableCell>            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ProductTable