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
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthdate);
    props.onRegister(username, password, email, birthdate);
  }

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
    })
    .catch(e => {
      console.log('error registering the user')
    });

  return (
    <Form className="RegForm">
      <Form.Group controlId="formGroupUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formGroupBirthdate">
        <Form.Label>Birthdate</Form.Label>
        <Form.Control type="date" placeholder="00-00-0000" value={birthdate} onChange={e => setBirthdate(e.target.value)} />
      </Form.Group>
      <span>
        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
        {' '}
        <Button variant="secondary" onClick={handleSubmit}>Back</Button>
      </span>
    </Form >
  )
}

RegistrationView.propTypes = {
  onRegister: PropTypes.func.isRequired
};