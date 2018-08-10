import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      homeLink: "Home"
    }
  }

  onGreet(){
    alert("Hello!");
  }

  onChangeLinkName(newName){
    this.setState({
      homeLink: newName
    });
  }

  render() {
    return (
      <div className="App">
        <Header homeLink={this.state.homeLink}/>
        <hr/>
        <Home name={"Raissa"} 
          initialAge={27} 
          greet={this.onGreet}  
          changeLink={this.onChangeLinkName.bind(this) //Because of the "This"
          }
          initialLinkName={this.state.homeLink}
        />
      </div>
    );
  }
}

export default App;
