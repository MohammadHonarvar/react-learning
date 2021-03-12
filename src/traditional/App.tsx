import { ChangeEvent, MouseEvent, Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { person as Person } from './Person';

// import { userInput as UserInput } from './UserInput';
// import { userOutput as UserOutput } from './UserOutput';

class App extends Component {
  state = {
    personList: [
      {
        id: 'asd1',
        name: 'MHF',
        age: 25,
      },
      {
        id: 'asd11',
        name: 'MHF2',
        age: 28,
      },
      {
        id: 'asd111',
        name: 'MHF3',
        age: 30,
      },
    ],
    isExistInList: false,
    showPersonList: false,
  };

  changePerson = (event: ChangeEvent<HTMLInputElement>, personId: string) => {
    console.log('Name: %s', personId);
    const targetPersonIndex = this.state.personList.findIndex(
      (person) => person.id === personId
    );
    if (targetPersonIndex === -1) return;

    const personList = [...this.state.personList];

    const targetPerson = {
      ...this.state.personList[targetPersonIndex],
    };
    targetPerson.name = event.target.value;

    personList[targetPersonIndex] = targetPerson;

    this.setState({
      personList,
    });
  };

  togglePersonListDisplay = () => {
    this.setState({
      showPersonList: !this.state.showPersonList,
    });
  };

  deletePerson = (event: MouseEvent<HTMLElement>, index: number) => {
    const personList = [...this.state.personList];
    personList.splice(index, 1);
    this.setState({
      personList,
    });
  };

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <h1>This my REACT App</h1>
        <button style={buttonStyle} onClick={this.togglePersonListDisplay}>
          Toggle Person List
        </button>
        {this.getPersonListTemplate()}
      </div>
    );
  }

  getPersonListTemplate() {
    let personListTemplate = null;
    if (this.state.showPersonList) {
      personListTemplate = (
        <div>
          {this.state.personList.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={(event) => this.deletePerson(event, index)}
                nameChangedHandler={(event) => this.changePerson(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return personListTemplate;
  }
}

// class App extends Component {
//   state = {
//     userName: 'MHFFF',
//   };

//   userNameChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
//     this.setState({
//       userName: event.target.value,
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <UserInput
//           userNameChangedHandler={this.userNameChangedHandler}
//           defaultUserName={this.state.userName ?? 'mhf'}
//         />
//         <UserOutput userName={this.state.userName} />
//         <UserOutput />
//         <UserOutput userName="MHF3" />
//       </div>
//     );
//   }
// }

export default App;
