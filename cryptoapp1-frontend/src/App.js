import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import Routes from './components/Routes/routes.jsx';
import Header from './components/Header/Nav'
function App() {
  return (
    <div className="App">
      <Header />
      <div id="main-wrapper">
        <Routes />
      </div>
     
    </div>
  );
}

export default App;
