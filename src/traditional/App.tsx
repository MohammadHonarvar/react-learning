import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { person as Person } from './Person';

class App extends Component {
  state = {
    personList: [
      {
        name: 'MHF',
        age: 25,
      },
      {
        name: 'MHF2',
        age: 28,
      },
      {
        name: 'MHF3',
        age: 30,
      },
    ],
    iExistInList: false,
  };

  changePerson = () => {
    this.setState({
      personList: [
        {
          name: 'Honarvar',
          age: 25,
        },
        {
          name: 'MHF2',
          age: 28,
        },
        {
          name: 'Farahbakhsh',
          age: 30,
        },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>This my REACT App</h1>
        <button onClick={this.changePerson}>New Person</button>
        <Person
          name={this.state.personList[0].name}
          age={this.state.personList[0].age}
          click={this.changePerson}
        />
        <Person
          name={this.state.personList[1].name}
          age={this.state.personList[1].age}
        />
        <Person
          name={this.state.personList[2].name}
          age={this.state.personList[2].age}
        >
          This is my favorites: PS5
        </Person>
      </div>
    );
  }
}

export default App;
