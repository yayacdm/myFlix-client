import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function Favorite() {

  const [hidden, setHidden] = useState('');
  const [favorites] = useState(user.data.movies);

  useEffect(() => {
    const user = localStorage.getItem("userId");
    const result = user.data.movies.find(m => m === movie._id);
    result ? setHidden('hidden') : setHidden('');
  }, favorites)

  /*
    Add movie to user's favorites
  */
  const addToFavorites = () => {
    const user = localStorage.getItem("userId");
    axios.put(`https://movieapi-yayacdm.herokuapp.com/users/${user.data.username}/${movie._id}`, {}, {
      headers: { Authorization: `Bearer ${user.token}` }
    })
      .then(user => {
        setUser(user.data, 'update');
        setHidden('hidden');
        localStorage.setItem('user', JSON.stringify(user.data));
      })
      .catch(err => {
        console.log(err.response);
      })
  }

  /*
    Remove movie from user's favorites
  */
  const removeFromFavorites = () => {
    const user = localStorage.getItem("userId");
    axios.delete(`https://movieapi-yayacdm.herokuapp.com/users/${user.data.username}/${movie._id}`, {
      headers: { Authorization: `Bearer ${user.token}` }
    })
      .then(user => {
        console.log(user.data);
        setUser(user.data, 'update');
        setHidden('');
        localStorage.setItem('user', JSON.stringify(user.data));
      })
      .catch(err => {
        console.log(err.response);
      })
  }

  return (
    <div>
      <Button hidden={hidden} onClick={addToFavorites} className="add mt-3 w-100">Add</Button>
      <Button hidden={!hidden} onClick={removeFromFavorites} className="remove mt-3 w-100">Remove</Button>
    </div>
  )
}

export default Favorite