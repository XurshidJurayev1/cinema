import React from 'react';
import s from './Movie.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { connect } from 'react-redux';
import { actionModalMovie, actionSelectedMovie } from '../../action';
import ContentModal from '../../components/ContentModal';
import { BsFillPlayFill } from 'react-icons/bs';

const IMG_API = 'https://image.tmdb.org/t/p/w1280/';


const Movies = (props) => {
  const { title, overview, poster_path, vote_average, media_type, id, name } = props;


  const select = async () => {
    props.actionSelectedMovie(media_type, id);
    props.actionModalMovie(title, overview, poster_path, vote_average, name);
  };


  return (
    <div className={s.card}>
      <ContentModal data={props}>
        <div className={s.play} onClick={select}>
          <BsFillPlayFill />
        </div>
          <LazyLoadImage src={IMG_API + poster_path} alt={title} effect="blur" delayTime={400} />
        <div className={s.cardInfo}>
          <h3>{title || name}</h3>
          <span>{vote_average}</span>
        </div>
        <div className={s.cardOver}>
          <h3>Обзор:</h3>
          <p>{overview}</p>
        </div>

      </ContentModal>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { actionSelectedMovie, actionModalMovie })(Movies);

