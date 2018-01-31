import { combineReducers } from 'redux';

import heroes from './heroesDuck';
import currentHero from './heroDuck';

export default combineReducers({ heroes, currentHero });
