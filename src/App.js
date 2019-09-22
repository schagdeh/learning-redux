import React from 'react';
import './App.css';
import Persons from './containers/Persons'

function App() {
  return (
    <div className="App">
      <h1>
        Turn this app into one which does NOT use local
        state (in components) but instead uses Redux
      </h1>
      <Persons />
    </div>
  );
}

export default App;
