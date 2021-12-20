import axios from 'axios';
import { apiKey } from './apiKey';

const cinema = axios.create({
  baseURL: `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=ru&page=1`,
});

// https://api.themoviedb.org/3/trending/all/week?api_key=dfdc4977529bdc7afb48e7dd8ae67a60
// https://api.themoviedb.org/3/trending/all/week?api_key=dfdc4977529bdc7afb48e7dd8ae67a60


export default cinema;
