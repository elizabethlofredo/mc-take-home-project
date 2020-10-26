import { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCourses, addFavorite, removeFavorite } from '../state/actions/courses';

const PAGE_LIMIT = 20;

export default () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [favorites, setFavorites] = useState(false);
  const { list: courses, loading } = useSelector(({ courses }) => courses);

  useEffect(() => {
    dispatch(getCourses(PAGE_LIMIT, currentPage));
  }, []);

  const getNextPage = () => {
    const nextPage = currentPage + 1;
    dispatch(getCourses(PAGE_LIMIT, nextPage));
    setCurrentPage(nextPage);
  };

  const handleFavorites = useCallback((id, onFavorites) => {
    const data = { "course_id": id };
    if (onFavorites) dispatch(removeFavorite(data))
    else dispatch(addFavorite(data))
  }, [dispatch]);

  const filterCourses = () => favorites ? courses.filter(({ my_list }) => my_list) : courses;

  return {
    loading,
    courses: filterCourses(),
    handleFavorites,
    getNextPage,
    onFilterFavorites: () => setFavorites(!favorites),
    filterOn: favorites,
  };
};
