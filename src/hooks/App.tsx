/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import './App.css';
import { person as Person } from './Person';

const App = () => {
  const [personState, setPersonList] = useState({
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
  });

  const changePerson = () => {
    setPersonList({
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

  return (
    <div className="App">
      <div className="App">
        <h1>This my REACT App</h1>
        <button onClick={changePerson}>New Person</button>
        <Person
          name={personState.personList[0].name}
          age={personState.personList[0].age}
        />
        <Person
          name={personState.personList[1].name}
          age={personState.personList[1].age}
        />
        <Person
          name={personState.personList[2].name}
          age={personState.personList[2].age}
        >
          This is my favorites: PS5
        </Person>
      </div>
    </div>
  );
};

export default App;
