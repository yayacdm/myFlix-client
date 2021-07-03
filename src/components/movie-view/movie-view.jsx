
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './movie-view.scss';
import axios from 'axios';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export class MovieView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addFavorite(movie) {
    const token = localStorage.getItem("token");
    const url =
      "https://movieapi-yayacdm.herokuapp.com/users/" +
      localStorage.getItem("user") + "/movies/" + movie._id;

    axios.post(url, "", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        console.log(response);
        alert(movie.Title + " has been added to favorites!");
      });
  }

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Jumbotron fluid className="MovieView">
        <div className="movie-view">
          <div>
            <Button variant="warning" onClick={() => { this.addFavorite(movie); }}>Favorite</Button>
          </div>
          <br></br>
          <div className="movie-title">
            <span className="label"></span>
            <span className="value">{movie.Title}  </span>
            <span className="value">({movie.Year}) </span>
          </div>
          <div className="movie-poster">
            <img src={movie.ImagePath} />
          </div>
          <div className="movie-description">
            <span className="label">Description: </span>
            <span className="value">{movie.Description}</span>
          </div>
          <div className="movie-director">
            <span className="label">Directed by: </span>
            <span className="link">
              <Link to={`/directors/${movie.Director.Name}`}>
                <Button variant="link">{movie.Director.Name}</Button>
              </Link>
            </span>
          </div>
          <div className="movie-genre">
            <span className="label">Genre: </span>
            <span className="link">
              <Link to={`/genres/${movie.Genre.Name}`}>
                <Button variant="link">{movie.Genre.Name}</Button>
              </Link>
            </span>
          </div>
          <br></br>
          <div>
            <Button variant="secondary" size="sm" onClick={() => { onBackClick(null); }}>Back</Button>
          </div>
        </div>
      </Jumbotron>
    );
  }
};

MovieView.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string
    }),
  }),
  onBackClick: PropTypes.func.isRequired
};