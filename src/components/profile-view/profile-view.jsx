import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './profile-view.scss';

export class ProfileView extends React.Component {
  render() {
    return (
      <Col>
        <Row>Profile View</Row>
        <Row>Username:</Row>
      </Col>
    );
  }
}