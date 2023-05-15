import React, { useState } from 'react';
import './Home.css';
import './Login'
import Carousel from './Carousel';


const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Do something with the search value
  };

  const handleLoginClick = () => {
    history.push('/login');
  };
  return (
    <div className="home-container">
      <div className={`blur-background ${isSearchFocused ? 'show' : ''}`}></div>
      <div className="search-container">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Search for hostels"
            value={searchValue}
            onChange={handleSearchChange}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
      <Carousel />
    </div>
  );
};

export default Home;
