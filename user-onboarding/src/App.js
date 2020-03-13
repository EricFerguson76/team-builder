import React, { useState } from 'react';
import Form from './components/Form';
import './App.css';

function App() {

  const [members, setMembers] = useState([{
    name: '',
    email: '',
    role: ''
  }])

  const submit = person => {
    setMembers([...members, person])
  }

  const TeamList = props => {
    return (
      <div>
        {props.members.map((teamMember, index) => {
          return (
            <div key={index}>
              <h2>{teamMember.name}</h2>
              <h2>{teamMember.email}</h2>
              <h2>{teamMember.role}</h2>
            </div>


          );
        })}

      </div>
    );
  };


  return (

    <div className="App">
      <h1>Team Members</h1>
      <Form submit={submit} />
      <TeamList members={members} />
    </div>

  );
}

export default App;
