import React from 'react';
import { TableRow, TableCell, Box } from '@material-ui/core';
import { Product } from '../model';

function ProductRow(props: { product: Product }) {
  const { product } = props;

  const name = product.stocked ? (
    product.name
  ) : (
    <Box color="error.main">{product.name}</Box>
  );

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{product.price}</TableCell>
    </TableRow>
  );
}

export default ProductRow;
