import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

function ProductCategoryRow(props: { category: string }) {
  const { category } = props;
  return (
    <TableRow>
      <TableCell colSpan={2}>{category}</TableCell>
    </TableRow>
  );
}

export default ProductCategoryRow;
