import React, { Component } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import About
from './components/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Home/>
        <Sidebar/>
        <About/>       
      </div>
    );
  }
}

export default App;
