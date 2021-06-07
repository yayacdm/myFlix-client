
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './movie-view.scss';
import axios from 'axios';
import { Link } from "react-router-dom";

export class MovieView extends React.Component {
  handleAdd() {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    axios.post(`https://movieapi-yayacdm.herokuapp.com/users/${user}` + "/movies/" +
      this.props.movie._id, {},
      { headers: { Authorization: `Bearer ${token}` } }
    )
      .then((response) => {
        console.log(response);
        alert(this.props.movie.Title + " has been added to your favorites!");
      })
  }

  handleRemove() {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    axios.delete(`https://movieapi-yayacdm.herokuapp.com/users/${user}` + "/movies/" +
      this.props.movie._id, {},
      { headers: { Authorization: `Bearer ${token}` } }
    )
      .then((response) => {
        console.log(response);
        alert(this.props.movie.Title + " has been removed from your favorites!");
      })
  }

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Jumbotron fluid className="MovieView">
        <div className="movie-view">
          <div className="movie-poster">
            <img src={movie.ImagePath} />
          </div>
          <div className="movie-title">
            <span className="label">Title: </span>
            <span className="value">{movie.Title}</span>
          </div>
          <div className="movie-description">
            <span className="label">Description: </span>
            <span className="value">{movie.Description}</span>
          </div>
          <div className="movie-year">
            <span className="label">Released: </span>
            <span className="value">{movie.Year}</span>
          </div>
          <Button variant="secondary" size="sm" onClick={() => { onBackClick(null); }}>Back</Button>

          <Link to={`/directors/${movie.Director.Name}`}>
            <Button variant="link">Director</Button>
          </Link>

          <Link to={`/genres/${movie.Genre.Name}`}>
            <Button variant="link">Genre</Button>
          </Link>
        </div>
        <div>
          <Link to={`/movies/${movie._id}`}>
            <Button block variant="success" onClick={() => this.handleAdd(movie)}>Add to favorites</Button>
          </Link>
          <Link to={`/movies/${movie._id}`}>
            <Button block variant="danger" onClick={() => this.handleRemove(movie)}>Remove from favorites</Button>
          </Link>
        </div>
      </Jumbotron>
    );
  }
};