import React from 'react';
import {
  Checkbox,
  InputBase,
  Paper,
  FormControlLabel,
  IconButton,
  Box,
} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon, Search as SearchIcon } from '@material-ui/icons';

type Props = {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange(value: string): void;
  onInStockChange(checked: boolean): void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    container: {
      marginTop: 15,
    },
  }),
);

function SearchBar(props: Props) {
  const { filterText, inStockOnly, onFilterTextChange, onInStockChange } =
    props;

  const handleFilterTextChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onFilterTextChange(event.target.value);
  };
  const handleInStockChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInStockChange(event.target.checked);
  };

  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Paper component="form" className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="Search Name"
          value={filterText}
          onChange={handleFilterTextChange}
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton
          type="button"
          className={classes.iconButton}
          aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Box className={classes.input}>
        <FormControlLabel
          control={
            <Checkbox
              checked={inStockOnly}
              onChange={handleInStockChange}
              name="inStockOnly"
              color="secondary"
            />
          }
          label="Only show products in stock"
        />
      </Box>
    </Box>
  );
}

export default SearchBar;
