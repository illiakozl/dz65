// App.js
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Sidebar />
        <MainContainer />
      </div>
    </div>
  );
};

export default App;
