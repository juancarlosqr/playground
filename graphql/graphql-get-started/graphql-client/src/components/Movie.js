import React from 'react'

const Movie = ({ movie }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-2by3">
        <img src={movie.poster} alt="Movie" />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{movie.name}</p>
          <p className="subtitle is-6">{movie.director.name}</p>
        </div>
      </div>
      <div className="content">
        <small>Year: {movie.year}</small>
        <br />
        <small>Rotten Tomatoes: {movie.rottenTomatoes}</small>
        <br />
        <small>Box office: {movie.boxOffice}</small>
      </div>
    </div>
  </div>
)

export default Movie
