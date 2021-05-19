import React, { useState } from 'react';
import './login-view.scss';
import PropTypes from 'prop-types';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  };

  return (
    <form className="login-form">
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <br />
      <button type="secondary" onClick={props.toggleRegister}>Register</button>
    </form>
  );
}

export function Button({ label }) {
  return <button className="login-button">{label}</button>;
}

LoginView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired,
  onRegister: PropTypes.func,
};