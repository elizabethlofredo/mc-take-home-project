import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCourses } from '../state/actions/courses';

export default () => {
  const dispatch = useDispatch();
  const { list: courses, loading } = useSelector(({ courses }) => courses);

  useEffect(() => {
   // TODO: uncomment with connect with backend
   // dispatch(getCourses());
  }, []);

  return {
    loading,
    courses,
  };
};
