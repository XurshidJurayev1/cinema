import axios from 'axios';
import { apiKey } from './apiKey';

const cinema = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ru&page=1`,
});


export default cinema;
