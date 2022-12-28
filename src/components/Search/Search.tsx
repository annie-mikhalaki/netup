import React from 'react';
import classes from './Search.module.css';
import Button from '../Button/Button';

interface Search {
    searchValue: string
    onSearchInputChange(e: any): void
    onSearchButtonClick(searchValue: string): void
}

const Search = (props: Search) => {
    const {searchValue, onSearchInputChange, onSearchButtonClick } = props;
    const onSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
        onSearchInputChange(e);
    };
    const handleSearchButtonClick = () => {
        onSearchButtonClick(searchValue);
    };

    return (
        <div className={classes.Search}>
            <input type="text" placeholder="Search" onChange={onSearch} />
            <Button text="search" onClick={handleSearchButtonClick} />
        </div>
    );
};

export default Search;