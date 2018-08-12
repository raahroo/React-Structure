import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Array from './components/Array';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      homeLink: "Home",
      homeMounted: true,
      simpleArray: [
        {name: "Name 1"},
        {name: "Name 2"},
        {name: "Name 3"}
      ]
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

  onChangeHomeMounted(){
    this.setState({
      homeMounted: !this.state.homeMounted
    });
  }

  onChangeArray(){
    this.setState({
      simpleArray: [
        {name: "Name 1"},
        {name: "Name 2"},
        {name: "Name 3"},
        {name: "Name 4"},
        {name: "Name 5"},
        {name: "Name 6"},
      ]
    })
  }

  render() {
    let homeCmp= "";

    if(this.state.homeMounted){
      homeCmp =  <Home name={"Raissa"} 
          initialAge={27} 
          greet={this.onGreet}  
          changeLink={this.onChangeLinkName.bind(this) //Because of the "This"
          }
          initialLinkName={this.state.homeLink}
        />;
    }
    return (
      <div className="App">
        <Header homeLink={this.state.homeLink}/>
        <hr/>
        {homeCmp}
        <hr/>
        <button 
          className="btn btn-primary"
          onClick={this.onChangeHomeMounted.bind(this)} >
          UnMount Component
        </button>
        <hr/>
        <Array array={this.state.simpleArray} />

         <button 
          className="btn btn-primary"
          onClick={this.onChangeArray.bind(this)} >
          Change Array
        </button>

      </div>
    );
  }
}

export default App;
