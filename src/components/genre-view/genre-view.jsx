import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './genre-view.scss';

export class GenreView extends React.Component {

  render() {
    const { genre, onBackClick } = this.props;

    return (
      <Jumbotron fluid className="GenreView">
        <div className="genre-view">
          <div className="genre-name">
            <span className="label">Genre: </span>
            <span className="value">{genre.Name}</span>
          </div>
          <div className="genre-description">
            <span className="label">Description: </span>
            <span className="value">{genre.Description}</span>
          </div>
          <Button variant="secondary" size="sm" onClick={() => { onBackClick(null); }}>Back</Button>
        </div>
      </Jumbotron>
    );
  }
}