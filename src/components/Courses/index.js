import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import useCourses from '../../hooks/useCourses';
import CourseItem from '../CourseItem';
import CheckBox from '../CheckBox';
import './courses.css';

const Courses = () => {
  const { 
    loading,
    courses,
    getNextPage,
    handleFavorites,
    onFilterFavorites,
    filterOn
  } = useCourses();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="courses">
      <CheckBox
        checked={filterOn} 
        onChange={onFilterFavorites}
        label="Only my favorites"
      />
      <InfiniteScroll
        dataLength={courses.length}
        next={getNextPage}
        hasMore
        loader={<h4>Loading...</h4>}
      >
        {courses.map((item) => (
          <CourseItem
            key={item.id}
            course={item}
            onClick={handleFavorites}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Courses;
