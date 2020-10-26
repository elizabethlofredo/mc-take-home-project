import { createAsyncThunk } from '@reduxjs/toolkit';

import coursesServices from '../../services/coursesService';

export const getCourses = createAsyncThunk('/courses', async (params) => {
  try {
    const { data } = await coursesServices.getCourses(params);
    return data;
  } catch (error) {
    console.log(error)
  }
});

export const addFavorite = createAsyncThunk('/favorites/add', async course => {
  try {
    const { data } = await coursesServices.addFavorite(course);
    return data.course_id;
  } catch (error) {
    console.log(error)
  }
});

export const removeFavorite = createAsyncThunk('/favorites/remove', async course => {
  try {
    await coursesServices.removeFavorite(course);
    return course.course_id;
  } catch (error) {
    console.log(error)
  }
});
