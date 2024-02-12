import React, { useState } from 'react';
import Courses from './Courses';
import SearchOverlay from './SearchOverlay';
import './App.css';

const LandingPage = () => {
  const [colour, setColour] = useState("#1479f2");
  const [overlay, setOverlay] = useState(false);

  const handleClick = () => {
    setColour(colour === "#1479f2" ? "#b789e5" : "#1479f2");
  }

  const toggleOverlay = () => {
    setOverlay(!overlay);
  }

  return (
    <div style={{ margin: '2% 10% 0 14%', height: '90vh' }}>
      {overlay ? <SearchOverlay toggle={toggleOverlay} /> : <></>}

      <div>
        <div>DevSoc presents</div>
        <h1 style={{ fontSize: '4em', margin: '1% 0', width: '325px', color: colour }} onClick={handleClick} className="title">unilectives</h1>
        <b>Your one-stop shop for UNSW course and elective reviews.</b>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', margin: '2% 0' }}>
        <input type="search" placeholder="Search for a course e.g. COMP1511" className="searchbar" onClick={toggleOverlay} />
        <br />
        <select className="sort">
          <option value="sort by">Sort by</option>
          <option value="sort 1">Sort 1</option>
          <option value="sort 2">Sort 2</option>
        </select>
      </div>

      <Courses />
    </div>
  );
}

export default LandingPage;