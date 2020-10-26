import React from 'react';

import useCourses from '../../hooks/useCourses';
import CourseItem from '../CourseItem'
import './courses.css';

const Courses = () => {
  const { loading, courses } = useCourses();

  const onClickCourse = () => {
    // TODO: add to favorites
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="courses">
      {courses.map((item) => (
        <CourseItem course={item} onClick={onClickCourse} />
      ))}
    </div>
  );
};

export default Courses;
