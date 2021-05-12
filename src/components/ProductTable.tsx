import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProductRow from './ProductRow';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ProductCategoryRow from './ProductCategoryRow';
import { Product } from '../model';

const useStyles = makeStyles({
  table: {
    width: '100%',
  },
  th: {
    fontWeight: 'bold',
  },
});

function ProductTable(props: {
  products: Array<Product>;
  filterText: string;
  inStockOnly: boolean;
}) {
  const classes = useStyles();
  const { products, filterText, inStockOnly } = props;

  const getRows = () => {
    const rows: JSX.Element[] = [];
    let lastCategory = '';

    products.forEach(product => {
      if (
        product.name.toLowerCase().indexOf(filterText.toLocaleLowerCase()) ===
        -1
      ) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }

      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            key={product.category}
            category={product.category}
          />,
        );
      }
      rows.push(<ProductRow key={product.name} product={product} />);
      lastCategory = product.category;
    });
    return rows;
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.th}>Name</TableCell>
            <TableCell className={classes.th}>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{getRows()}</TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProductTable;
