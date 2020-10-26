import { createAsyncThunk } from '@reduxjs/toolkit';

import coursesServices from '../../services/coursesService';

export const getCourses = createAsyncThunk('/courses', async () => {
  try {
    const { data } = await coursesServices.getCourses();
    return data;
  } catch ({ response: { data } }) {
    // TODO: handle error
  }
});
