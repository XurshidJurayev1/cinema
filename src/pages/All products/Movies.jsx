import React from 'react';
import s from './Movie.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const IMG_API = 'https://image.tmdb.org/t/p/w1280/';

function Movies(props) {
  const { title, overview, poster_path, vote_average } = props;
  return (
    <div className={s.card}>
      <LazyLoadImage src={IMG_API + poster_path} alt={title} effect="blur" delayTime={400} />
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