import React, { useState } from 'react';
import axios from 'axios';
//import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
//import PropTypes from 'prop-types';
import './registration-view.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let setisValid = formValidation();
    if (setisValid) {
      axios.post('https://movieapi-yayacdm.herokuapp.com/users', {
        Username: username,
        Password: password,
        Email: email,
        Birthdate: birthdate
      })
        .then(response => {
          const data = response.data;
          console.log(data);
          window.open('/', '_self'); // the second argument '_self' is necessary so that the page will open in the current tab
          alert("You have sucessfully registered.");
        })
        .catch(error => {
          if (error.response && error.response.status === 400) {
            alert('The value you entered is not valid.')
          }
        });
      console.log(username, password, email, birthdate);
      props.onRegister(username, password, email, birthdate);
    };
  }

  const formValidation = () => {
    const usernameError = {};
    const emailError = {};
    const passwordError = {};
    const birhdateError = {};
    let isValid = true;
    if (username.trim().length < 5) {
      usernameError.usernameShort = "Must be alphanumeric and contains at least 5 characters";
      isValid = false;
    }
    else if (password.trim().length < 4) {
      passwordError.passwordMissing = "You must enter a password.(minimum 4 characters) ";
      isValid = false;
    }
    else if (!email.includes(".") || !email.includes("@")) {
      emailError.emailNotEmail = "A valid email address is required.";
      isValid = false;
    }
    else if (birthdate === '') {
      birhdateError.noBirthdate = "Please enter a birthdate";
      isValid = false;
    }
    return isValid;
  };

  return (
    <Form className="RegForm" onSubmit={handleSubmit}>
      <Form.Group controlId="formGroupUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} required />
        <Form.Control.Feedback type="invalid">Please provide a valid username.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <Form.Control.Feedback type="invalid">Please provide a valid password.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formGroupBirthdate">
        <Form.Label>Birthdate</Form.Label>
        <Form.Control type="date" placeholder="00-00-0000" value={birthdate} onChange={e => setBirthdate(e.target.value)} required />
      </Form.Group>
      <span>
        <Button type="submit">Submit</Button>
        {' '}
        <Button variant="secondary" onClick={history.goBack}>Back</Button>
      </span>
    </Form >
  )
}

RegistrationView.propTypes = {
  register: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthdate: PropTypes.string.isRequired
  }),
};