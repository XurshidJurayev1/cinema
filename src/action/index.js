import axios from 'axios';
import { apiKey } from '../services/api/cinema/apiKey';


export const actionSelectedMovie = (media_type, id) => async (dispatch) => {
  const response = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${apiKey}&language=ru`);
  dispatch({
    type: 'FETCH_MOVIE',
    payload: response.data.results,
  });
};

export const actionModalMovie = () =>{
  return{
    type: "SELECTED_MOVIE",
    payload: {}
  }
}