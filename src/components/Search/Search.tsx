import React from 'react';
import classes from './Search.module.css';
import Button from '../Button/Button';
import ClearInputIcon from '../../icons/ClearInputIcon';

interface Search {
  searchValue: string;
  onSearchInputChange(e: any): void;
  onClearSearchInputClick(): void;
  onSearchButtonClick(searchValue: string): void;
}

const Search = (props: Search) => {
  const { searchValue, onSearchInputChange, onSearchButtonClick, onClearSearchInputClick } = props;
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onSearchInputChange(e);
  };

  const handleSearchButtonClick = () => {
    onSearchButtonClick(searchValue);
  };

  return (
    <div className={classes.Search}>
      <div>
        <input type='text' placeholder='Search' onChange={onSearch} value={searchValue} />
        <button onClick={onClearSearchInputClick} className={classes.clearInputButton}>
          {searchValue.length > 0 && <ClearInputIcon />}
        </button>
      </div>
      <Button text='search' onClick={handleSearchButtonClick} />
    </div>
  );
};

export default Search;
