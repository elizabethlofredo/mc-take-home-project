import { createReducer } from '@reduxjs/toolkit';

import { getCourses, addFavorite, removeFavorite } from '../actions/courses';

const initialState = {
  list: [],
  reachedLastPage: false
};

const actionHandlers = {
  [getCourses.fulfilled]: (state, { payload }) => {
    state.list = [ ...state.list, ...payload];
    if (!payload.length) state.reachedLastPage = true;
  },
  [addFavorite.fulfilled]: (state, { payload: course_id }) => {
    const index = state.list.findIndex(({ id }) => id === course_id);
    if (index >= 0) state.list[index].my_list = true;
  },
  [removeFavorite.fulfilled]: (state, { payload: course_id }) => {
    const index = state.list.findIndex(({ id }) => id === course_id);
    if (index >= 0) state.list[index].my_list = false;
  },
};

export default createReducer(initialState, actionHandlers);
