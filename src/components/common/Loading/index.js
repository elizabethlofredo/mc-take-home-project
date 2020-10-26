import React from 'react';
import { number, string } from 'prop-types';
import Loader from 'react-loader-spinner';

import { primaryColor } from '../../../constants/common';
import './loading.css';

const Loading = ({ height = 50, width = 50, color = primaryColor }) => (
  <div className="loading">
    <Loader type="Bars" color={color} height={height} width={width} />
  </div>
);

Loading.propTypes = {
  width: number,
  height: number,
  color: string,
};

export default Loading; 
