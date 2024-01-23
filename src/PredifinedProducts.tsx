import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
  createObjectData(
    1,
    'Rolex',
    'Cellini',
    'Self-winding mechanical movement entirely',
    '../img/Classic watches_Cellini.jpg',
    17000,
  ),
  createObjectData(
    2,
    'Rolex',
    'Yacht-Master',
    'Self-winding mechanical movement entirely',
    '../img/Professional watches_Yacht-Master.jpg',
    13500,
  ),
];

function createObjectData(
  categoryId: number,
  categoryName: string,
  productName: string,
  productDescription: string,
  productImage: string,
  price: number,
) {
  return { categoryId, categoryName, productName, productDescription, productImage, price };
}

export default function basicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={6} size={'small'}>
              Watches
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">CategoryId</TableCell>
            <TableCell align="center">CategoryName&nbsp;(g)</TableCell>
            <TableCell align="center">ProductName&nbsp;(g)</TableCell>
            <TableCell align="center">ProductDescription&nbsp;(g)</TableCell>
            <TableCell align="center">ProductImage&nbsp;(g)</TableCell>
            <TableCell align="center">Price&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={`Watch ${row.categoryId}`} sx={{ border: 2 }}>
              <TableCell align="center">{row.categoryId}</TableCell>
              <TableCell align="center">{row.categoryName}</TableCell>
              <TableCell align="center">{row.productName}</TableCell>
              <TableCell align="center">{row.productDescription}</TableCell>
              <TableCell align="center">{row.productImage}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
