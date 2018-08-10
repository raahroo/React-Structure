import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';

import './App.css';

class App extends Component {
  onGreet(){
    alert("Hello!");
  }
  render() {
    return (
      <div className="App">
        <Header homeLink="Home"/>
        <hr/>
        <Home name={"Raissa"} initialAge={27} greet={this.onGreet}>
          <p>Testssss</p>
        </Home>
      </div>
    );
  }
}

export default App;
