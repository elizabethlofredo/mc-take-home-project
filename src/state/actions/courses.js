import { createAsyncThunk } from '@reduxjs/toolkit';

import coursesServices from '../../services/coursesService';

export const getCourses = createAsyncThunk('/courses', async (limit, offset) => {
  try {
    // TODO: uncomment when connect with backend
    // const data = await coursesServices.getCourses(limit, offset);
    return [];
  } catch ({ response: { data } }) {
    // TODO: handle error
  }
});

export const addFavorite = createAsyncThunk('/favorites/add', async data => {
  try {
    // TODO: uncomment when connect with backend
    //const { course_id } = await coursesServices.addFavorite(data);
    return { courseId: data.course_id };
  } catch ({ response: { data } }) {
    // TODO: handle error
  }
});

export const removeFavorite = createAsyncThunk('/favorites/remove', async data => {
  try {
    // TODO: uncomment when connect with backend
    //const { course_id } = await coursesServices.removeFavorite(data);
    return { courseId: data.course_id };
  } catch ({ response: { data } }) {
    // TODO: handle error
  }
});
