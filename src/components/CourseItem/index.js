import React from 'react';
import { shape, func } from 'prop-types';

import Check from '../../../src/images/checkIcon.png'
import { courseShape } from '../../constants/shapes';
import './courseItem.css';

const CourseItem = ({
  course: { id, instructor_name, title, instructor_image_url, my_list },
  onClick
}) => (
  <div className="course" onClick={() => onClick(id, my_list)}>
    <img src={instructor_image_url} alt="img" />
    <div className="info">
      <h5>{instructor_name}</h5>
      <p>{title}</p>
    </div>
    {my_list && <img className="check" src={Check} alt="check" />}
  </div>
);

CourseItem.propTypes = {
  course: shape(courseShape).isRequired,
  onClick: func.isRequired,
};

export default CourseItem;
