import axios from 'axios';
import getQueryParams from '../utils/getQueryParams';

const BASE_URL = 'http://gateway.marvel.com:80';

const FETCH_DETAIL = 'FETCH_DETAIL';
const CLEAN_DETAILS = 'CLEAN_DETAILS';

const defaultState = [];

const hero = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_DETAIL:
      return action.data;
    case CLEAN_DETAILS:
      return defaultState;
    default:
      return state;
  }
};

export default hero;

export const fetchDetails = id => dispatch =>
  // TODO: use react-promise middleware to auto dispatch laoding, success and fail actions
  axios
    .get(`${BASE_URL}/v1/public/characters/${id}`, {
      params: getQueryParams(),
    })
    .then(response =>
      dispatch({
        type: FETCH_DETAIL,
        data: response.data.data.results[0],
      })
    )
    // TODO: ispatch error action
    // eslint-disable-next-line no-console
    .catch(error => console.log(error));

// Clean state so when you leave the page, the state stays clean
// The reducer should be hooked to react-router-redux
// instead of manually throwing an action...
export const cleanDetails = () => ({
  type: CLEAN_DETAILS,
});
