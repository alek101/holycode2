import authors from './authors';
import people from './people';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    authors,
    people
});

export default allReducers;
