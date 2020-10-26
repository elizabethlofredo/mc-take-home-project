import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import useCourses from '../../hooks/useCourses';
import CourseItem from '../CourseItem';
import CheckBox from '../common/CheckBox';
import Loading from '../common/Loading';
import './courses.css';

const Courses = () => {
  const {
    loading,
    courses,
    getNextPage,
    handleFavorites,
    onFilterFavorites,
    filterOn,
    hasMoreCourses
  } = useCourses();

  if (loading) {
    return (
      <div className="flex loading">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="flex filter-container">
        <CheckBox
          checked={filterOn}
          onChange={onFilterFavorites}
          label="Only my favorites"
        />
      </div>
      <InfiniteScroll
        dataLength={courses.length}
        next={getNextPage}
        hasMore={hasMoreCourses}
        loader={<Loading />}
      >
        <div className="courses">
          {courses.map((item) => (
            <CourseItem
              key={item.id}
              course={item}
              onClick={handleFavorites}
            />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Courses;
