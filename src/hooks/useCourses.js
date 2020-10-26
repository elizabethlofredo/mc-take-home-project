import { useEffect, useCallback, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCourses, addFavorite, removeFavorite } from '../state/actions/courses';

const PAGE_LIMIT = 30;

export default () => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  const [favorites, setFavorites] = useState(false);
  const { list: courses, loading, reachedLastPage } = useSelector(({ courses }) => courses);

  const getNextPage = () => {
    dispatch(getCourses({ limit: PAGE_LIMIT, offset: offset * PAGE_LIMIT }));
    setOffset(offset + 1);
  };

  useEffect(() => {
    getNextPage();
  }, []);

  const handleFavorites = useCallback((id, onFavorites) => {
    const course = { "course_id": id };
    if (onFavorites) dispatch(removeFavorite(course))
    else dispatch(addFavorite(course))
  }, [dispatch]);

  const filteredCourses = useMemo(
    () => favorites ? courses.filter(({ my_list }) => my_list) : courses,
    [favorites, courses]
  );

  return {
    loading,
    courses: filteredCourses,
    hasMoreCourses: !reachedLastPage,
    handleFavorites,
    getNextPage,
    onFilterFavorites: () => setFavorites(!favorites),
    filterOn: favorites,
  };
};
