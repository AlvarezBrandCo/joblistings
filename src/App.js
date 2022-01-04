import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import "./css/main.css";
import JobListing from "./components/JobListing";
import FilterBar from "./components/FilterBar";
import { listings } from "./apis/job-listings";

function App() {

  const [keywords, setKeywords] = useState([]);

  const handleKeywords = e => {
    
    const item = e.target.innerText;
    if (!keywords.includes(item)) {
      setKeywords([...keywords, `${e.target.innerText}`])
    }
  }
  const removeKeyword = e => setKeywords(keywords.filter(x => x !== e.target.innerText))
  
  const filteredListings = listings.filter(item => keywords.every(x => item.keywords.includes(x))) || filteredListings;

  const renderListings = filteredListings.length > 0 ? filteredListings : listings
  
  return (
    <div className="App">
      <div className="header"/>
      <div className="container">
        {keywords.length > 0 && <FilterBar keywords={keywords} onClick={removeKeyword} clearClick={() => setKeywords([])}/>}
      </div>
      <div className="container mt-5 pt-3">
        {renderListings.map((x, i) => {
          return (
            <JobListing listing={x} key={i} onClick={handleKeywords}/>
          )
        })
        }
      </div>
    </div>
  );
}

export default App;
