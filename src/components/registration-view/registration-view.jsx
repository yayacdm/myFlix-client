import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './registration-view.scss';

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthdate);
    props.onRegister(username);
  }

  return (
    <form className="reg-form">
      <label className="reginput">
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label className="reginput">
        Password:
      <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <label className="reginput">
        Email:
      <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label className="reginput">
        Birthdate:
      <input type="text" value={birthdate} onChange={e => setBirthdate(e.target.value)} />
      </label>
      <span>
        <button type='button' onClick={handleSubmit}>Submit</button>
        <button onClick={() => { onBackClick(null); }}>Back</button>
      </span>
    </form>
  )
}

RegistrationView.PropTypes = {
  onRegister: PropTypes.func.isRequired
};