import React from 'react';

import useCourses from '../../hooks/useCourses';
import CourseItem from '../CourseItem'
import './courses.css';

const Courses = () => {
  const { loading, courses, handleFavorites } = useCourses();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="courses">
      {courses.map((item) => (
        <CourseItem 
          key={item.id}
          course={item}
          onClick={handleFavorites}
        />
      ))}
    </div>
  );
};

export default Courses;
