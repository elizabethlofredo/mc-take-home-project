import React from 'react';
import { shape, func } from 'prop-types';

import { courseShape } from '../../constants/shapes';
import './courseItem.css';

const CourseItem = ({ course: { id, instructor_name, title, instructor_image_url, my_list }, onClick }) => (
  <div key={id} className="course" onClick={onClick}>
    <img src={instructor_image_url} alt="img" />
    <div className="info">
      <h5>{instructor_name}</h5>
      <p>{title}</p>
    </div>
  </div>
);

CourseItem.propTypes = {
  course: shape(courseShape).isRequired,
  onClick: func.isRequired,
};

export default CourseItem;
