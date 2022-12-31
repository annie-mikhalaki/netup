import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import Loading from './components/loading/Loading';
import Button from './components/Button/Button';
import Nav from './components/Nav/Nav';
import MovieCard from './components/MovieCard/MovieCard';
import Search from './components/Search/Search';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const fetchStatuses = {
  pending: 'pending',
  success: 'success',
  rejected: 'rejected',
};

interface Background {
  url: string;
}

export interface Film {
  type: string;
  title: string;
  imdb_rate: number;
  is_new: boolean;
  country: string;
  year: number;
  length: number;
  num_seasons: number;
  min_age: number;
  genres: string[];
  poster: string;
  keyframe: string;
}

const App: React.FC = () => {
  const [fetchStatus, setFetchStatus] = useState(fetchStatuses.pending);
  const [searchStatus, setSearchStatus] = useState(fetchStatuses.success);
  const [discoverItems, setDiscoverItems] = useState<Film[]>([]);
  const [backgrounds, setBackgrounds] = useState<Background[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [currentBackgroundImageIndex, setCurrentBackgroundImageIndex] = useState(-1);

  const cardsItemsRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const visibleDiscoverItems = searchValue
    ? discoverItems.filter((item: Film) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    : discoverItems;

  const fetchDiscover = () => {
    axios
      .get('api/discover')
      .then(({ data }) => {
        setFetchStatus(fetchStatuses.success);
        setDiscoverItems(
          data.items.map((item: Film) => ({
            ...item,
            poster: `/api/${item.poster}`,
            keyframe: `/api/${item.keyframe}`,
          }))
        );
        setBackgrounds(data.backgrounds.map((item: Background) => ({ ...item, url: `/api/${item.url}` })));
        setCurrentBackgroundImageIndex(0);
      })
      .catch(() => {
        setFetchStatus(fetchStatuses.rejected);
      });
  };

  useEffect(() => {
    fetchDiscover();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const nextBackgroundImageIndex =
        currentBackgroundImageIndex < backgrounds.length - 1 ? currentBackgroundImageIndex + 1 : 0;
      setCurrentBackgroundImageIndex(nextBackgroundImageIndex);
    }, 5000);
  }, [currentBackgroundImageIndex]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchStatus(fetchStatuses.pending);
    setSearchValue(e.target.value);
    setTimeout(() => {
      setSearchStatus(fetchStatuses.success);
    }, 500);
  };

  const handleSearchButtonClick = () => {
    setSearchStatus(fetchStatuses.pending);
    setTimeout(() => {
      setSearchStatus(fetchStatuses.success);
    }, 500);
    if (searchValue === 'NETUP TV') {
      setSearchValue('');
    }
  };

  const handleClearSearchInput = () => {
    setSearchValue('');
  };

  const handleMenuItemClick = (title: string) => {
    setSearchValue(title);
  };

  const handleTryAgainClick = () => {
    fetchDiscover();
  };

  return (
    <>
      {fetchStatus === fetchStatuses.success && (
        <div className='container'>
          <div
            className='container-bg'
            style={{ backgroundImage: `url(${backgrounds[currentBackgroundImageIndex].url})` }}
          ></div>
          <Nav onMenuItemClick={handleMenuItemClick} />
          <Search
            searchValue={searchValue}
            onSearchInputChange={handleSearch}
            onSearchButtonClick={handleSearchButtonClick}
            onClearSearchInputClick={handleClearSearchInput}
          />
          {searchStatus === fetchStatuses.pending && (
            <div className='movie-cards_loading'>
              <Loading />
            </div>
          )}
          {searchStatus === fetchStatuses.success && visibleDiscoverItems.length != 0 && (
            <>
              <h2 className='movie-cards_title'>in the spotlight</h2>
              <div className='movie-cards'>
                <div className='movie-cards_items' ref={cardsItemsRef}>
                  {visibleDiscoverItems.map((item, index) => <MovieCard key={`movie_${index}`} {...item} />)}
                </div>
              </div>
            </>
          )}
        </div>
      )}
      {fetchStatus === fetchStatuses.pending && (
        <div className='center'>
          <Loading />
        </div>
      )}
      {fetchStatus === fetchStatuses.rejected && (
        <div className='center'>
          <Button onClick={handleTryAgainClick}>Try again</Button>
        </div>
      )}
    </>
  );
};

export default App;
