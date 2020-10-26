import { combineReducers } from 'redux';

import courses from '../reducers/courses';

const reducer = combineReducers({
  courses,
});

export default reducer;
