import React, { useState } from 'react';

const Form = props => {

  const [input, setInput] = useState({
    title: '',
    email: '',
    role: ''
  });


  const changeHandler = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const submitInfo = e => {
    e.preventDefault();
    props.submit(input)
    setInput({ name: '', email: '', role: '' })
  }


  return (
    <form onSubmit={submitInfo}>
      <label htmlFor='name'>Name</label>
      <input
        name='name'
        id='name'
        type='text'
        onChange={changeHandler}
        value={input.name}
      />
      <label htmlFor='email'>Email</label>
      <input
        name='email'
        id='email'
        type='text'
        onChange={changeHandler}
        value={input.email}
      />
      <label htmlFor='role'>Role</label>
      <input
        name='role'
        id='role'
        type='text'
        onChange={changeHandler}
        value={input.role}>
      </input>
      <button type='submit'>Submit</button>
    </form>
  )

}

export default Form;