import axios from 'axios';
import getQueryParams from '../utils/getQueryParams';

const BASE_URL = 'http://gateway.marvel.com:80';

const FETCH_LIST = 'FETCH_LIST';

const heroes = (state = [], action) => {
  switch (action.type) {
    case FETCH_LIST:
      console.log(action);

      return action.data;
    default:
      return state;
  }
};

export default heroes;

export const fetchList = () => dispatch =>
  axios.get(`${BASE_URL}/v1/public/characters`, {
    params: getQueryParams()
  })
    .then(response => console.log(response.data) || dispatch({
      type: FETCH_LIST,
      data: response.data.data.results
    }))
    .catch(error => console.log(error));
