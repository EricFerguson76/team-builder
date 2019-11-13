import React, { useState } from 'react';
import Form from './components/Form';
import TeamList from './components/TeamLIst';
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


  return (
    <div className="App">
      <h1>Team Members</h1>

      <TeamList teamMembers={members} />
    </div>
  );
}

export default App;
