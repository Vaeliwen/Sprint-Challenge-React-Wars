import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Bio } from './components/Bio'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

useEffect(() => {
  axios
    .get(`https://swapi.co/api/people/`)
    .then(res => setCharacters(res.data.results))
    .catch(err => "These aren't the datasets you're looking for.")
}, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {characters.map((char) => {return <Bio char={char} key={char.url} />})}
    </div>
  );
}

export default App;
