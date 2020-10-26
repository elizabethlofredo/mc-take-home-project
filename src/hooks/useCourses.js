import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCourses, addFavorite, removeFavorite } from '../state/actions/courses';

export default () => {
  const dispatch = useDispatch();
  const { list: courses, loading } = useSelector(({ courses }) => courses);

  useEffect(() => {
   // TODO: uncomment with connect with backend
   // dispatch(getCourses());
  }, []);

  const handleFavorites = useCallback((id, onFavorites) => {
    const data = { "course_id": id };
    if (onFavorites) dispatch(removeFavorite(data))
    else dispatch(addFavorite(data))
  }, [dispatch]);

  return {
    loading,
    courses,
    handleFavorites,
  };
};
