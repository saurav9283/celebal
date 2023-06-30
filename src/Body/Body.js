import React, { useState } from 'react';
import './body.css'
const MyForm = () => {
  const [inputValues, setInputValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form inputs:', inputValues);
    setInputValues({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className='Body'>
    <form onSubmit={handleSubmit} className='form'>
      <input
        type="text"
        name="firstName"
        value={inputValues.firstName}
        onChange={handleChange}
        placeholder="First Name"
      /> 
      <br></br>
      <input
        type="text"
        name="lastName"
        value={inputValues.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <br></br>
      <input
        type="email"
        name="email"
        value={inputValues.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <br></br>
      <textarea
        name="message"
        value={inputValues.message}
        onChange={handleChange}
        placeholder="Message"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default MyForm;
