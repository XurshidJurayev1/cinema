import React from 'react';
import s from './Movie.module.css';

const IMG_API = 'https://image.tmdb.org/t/p/w1280/';

function Movies({ title, overview, poster_path, vote_average }) {
  return (
    <div className={s.card}>
      <img src={IMG_API + poster_path} alt={title} />
      <div className={s.cardInfo}>
        <h3>{title}</h3>
        <span>{vote_average}</span>
      </div>
      <div className={s.cardOver}>
        <h3>Обзор:</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default Movies;