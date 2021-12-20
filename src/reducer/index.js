import { combineReducers } from 'redux';


const fetchMovie = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_MOVIE':
      return action.payload;
    default:
      return state;
  }
};

const modalMovie = (state = [], action) => {
  switch (action.type) {
    case 'SELECTED_MOVIE':
      return action.payload;
    default:
      return state;
  }
};
export default combineReducers({
  fetchMovie,
  modalMovie,
});