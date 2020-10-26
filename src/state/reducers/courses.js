import { createReducer } from '@reduxjs/toolkit';

import { getCourses, addFavorite, removeFavorite } from '../actions/courses';

const initialState = {
  loading: false,
  list: [],
  reachedLastPage: false
};

const actionHandlers = {
  [getCourses.pending]: (state) => {
    state.loading = true;
  },
  [getCourses.fulfilled]: (state, { payload }) => {
    state.list = [ ...state.list, ...payload];
    if (!payload.length) state.reachedLastPage = true;
    state.loading = false;
  },
  [addFavorite.fulfilled]: (state, { payload: { courseId } }) => {
    const index = state.list.findIndex(({ id }) => id === courseId);
    if (index >= 0) state.list[index].my_list = true;
  },
  [removeFavorite.fulfilled]: (state, { payload: { courseId } }) => {
    const index = state.list.findIndex(({ id }) => id === courseId);
    if (index >= 0) state.list[index].my_list = false;
  },
};

export default createReducer(initialState, actionHandlers);
