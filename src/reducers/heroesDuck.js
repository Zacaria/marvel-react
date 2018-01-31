import axios from 'axios';
import getQueryParams from '../utils/getQueryParams';

const BASE_URL = 'http://gateway.marvel.com:80';

const FETCH_LIST = 'FETCH_LIST';

const heroes = (state = [], action) => {
  switch (action.type) {
    case FETCH_LIST:
      return action.data;
    default:
      return state;
  }
};

export default heroes;

export const fetchList = () => dispatch =>
  // TODO: use react-promise middleware to auto dispatch laoding, success and fail actions
  axios
    .get(`${BASE_URL}/v1/public/characters`, {
      params: getQueryParams(),
    })
    .then(response =>
      dispatch({
        type: FETCH_LIST,
        data: response.data.data.results,
      })
    )
    // TODO: dispatch error action
    // eslint-disable-next-line no-console
    .catch(error => console.log(error));
