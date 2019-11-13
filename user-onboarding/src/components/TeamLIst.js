import React from 'react';


const TeamList = props => {
  return (
    <div>
      {props.teamMember.map((teamMember, index) => {
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

export default TeamList;