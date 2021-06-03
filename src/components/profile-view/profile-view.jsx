import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './profile-view.scss';

export class ProfileView extends React.Component {

  render() {
    const { user } = this.props;

    return (
      <Jumbotron fluid className="ProfileView">
        <div className="profile-view">
          <div className="profile-name">
            <span className="label">Username: </span>
            <span className="value">{user.Username}</span>
          </div>
          <div className="profile-email">
            <span className="label">Email: </span>
            <span className="value">{user.Email}</span>
          </div>
          <div className="profile-birthday">
            <span className="label">Birthdate: </span>
            <span className="value">{user.Birthday}</span>
          </div>
          <Button variant="secondary" size="sm">Back</Button>
        </div>
      </Jumbotron>
    );
  }
};