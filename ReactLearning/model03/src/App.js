import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    Persons: [
      {name:'Max',age:29},
      {name:'Foush',age:23},
      {name:'Lionmoon',age:24}
    ]
  }
  SwitchNameHandler = (newName) => {
    // console.log("was clicked");
    // Don't use thsis syntax :) this.state.Persons[0].name = "Ahmed Fouad";
    this.setState({
      Persons: [
        { name: newName, age: 29 },
        { name: 'FoushWare', age: 23 },
        { name: 'Stephanie', age: 24 }
      ]
    });

    

  }
  nameChangedHandler = (event) => {
    this.setState({
      Persons: [
        { name: event.target.value, age: 29 },
        { name: 'FoushWare', age: 23 },
        { name: 'Stephanie', age: 24 }
      ]
    });
 
  }

  render() {
    return (
      <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
        <button onClick={ this.SwitchNameHandler.bind(this,'MAX!')}>Switch Name</button>
        <Person
          name={this.state.Persons[0].name}
          age={this.state.Persons[0].age}
          click={this.SwitchNameHandler}
          changed={this.nameChangedHandler}

        />
        <Person name={this.state.Persons[1].name} age={this.state.Persons[1].age} />
        <Person
          name={this.state.Persons[2].name}
          age={this.state.Persons[2].age}
        
        
        />
  
      </div>
    );
  }
}

export default App;
