import React from 'react';
import { getProducts } from '../api';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import { Container } from '@material-ui/core';

function FilterableProductTable() {
  const [filterText, setFilterText] = React.useState('');
  const [inStockOnly, setInStockOnly] = React.useState(false);
  const handleFilterTextChange = (value: string) => setFilterText(value);
  const handleInStockChange = (checked: boolean) => setInStockOnly(checked);

  const [products, setProducts] = React.useState([]);
  const _getProducts = () => {
    getProducts()
      .then(response => {
        setProducts(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    _getProducts();
  }, []);

  return (
    <Container>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </Container>
  );
}

export default FilterableProductTable;
