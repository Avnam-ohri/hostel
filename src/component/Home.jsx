import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../server/firebase';
import { FcGraduationCap } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Carousel from './Carousel';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigate = useNavigate();

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
    // Perform search with the searchValue
    if (searchValue) {
      // Redirect to find a hostel page with location filtered properties
      navigate(`/find-a-hostel?location=${searchValue}`);
    } else {
      // Display a message or perform alternative action
    }
  };

  const handleLocationButtonClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Use latitude and longitude to fetch nearby hostels
          // Redirect to find a hostel page with location filtered properties
          navigate(`/find-a-hostel?latitude=${latitude}&longitude=${longitude}`);
        },
        (error) => {
          console.log(error);
          // Handle location error
        }
      );
    } else {
      // Geolocation is not supported by the browser
      // Handle unsupported browser
    }
  };
 
   
      // useEffect(()=>{
      //     onAuthStateChanged(auth, (user) => {
      //         if (user) {
      //           // User is signed in, see docs for a list of available properties
      //           // https://firebase.google.com/docs/reference/js/firebase.User
      //           const uid = user.uid;
      //           // ...
      //           console.log("uid", uid)
      //         } else {
      //           // User is signed out
      //           // ...
      //           console.log("user is logged out")
      //         }
      //       });
           
      // }, [])
      
     return (
    <div className="home-container">
      <div className={`blur-background ${isSearchFocused ? 'show' : ''}`}></div>
      <div className="search-container">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Enter your location"
            value={searchValue}
            onChange={handleSearchChange}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
          />
          <button type="submit" className="search-button">
            Search
          </button>
          <FcGraduationCap type="button" className="location-button" onClick={handleLocationButtonClick}>
          </FcGraduationCap>
        </form>
      </div>
      <Carousel />
    </div>
  );
};

export default Home;
