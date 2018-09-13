import React, { Component } from 'react';
import Nav from './components/Nav';
import Skills from './components/Skills';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import About
from './components/About';
import './App.css';

class App extends Component {
  
  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll);
    
  }
  handleScroll(){
    var x=document.getElementById('skills').offsetTop;
    var y=document.getElementsByTagName("i")[0].offsetTop;
    var z=document.getElementsByTagName("i");
    var u=document.getElementsByClassName("li");

    if(document.documentElement.scrollTop >= x -y ) {
        for (let index = 0; index < z.length; index++) {
          z[index].style.color='black ';
        }
        for (let index = 0; index < u.length; index++) {
          u[index].style.color='black';
        }
    }
    else{
      for (let index = 0; index < z.length; index++) {
        z[index].style.color='white';
      }
      for (let index = 0; index < u.length; index++) {
        u[index].style.color='white';
      }
    }
  }
  render() {    
    return (
      <div className="App">
        <Nav />
        <Home/>
        <Sidebar/>
        <About/>    
        <Skills/>   
      </div>
    );
  }
}

export default App;
