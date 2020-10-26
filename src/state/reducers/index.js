import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import localForage from 'localforage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import courses from '../reducers/courses';

const coursesPersistConfig = {
  key: 'courses',
  storage: localForage,
  whitelist: ['list'],
  stateReconciler: autoMergeLevel2
};

const reducer = combineReducers({
  courses: persistReducer(coursesPersistConfig, courses)
});

export default reducer;
