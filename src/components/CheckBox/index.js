import React from 'react';
import { bool, string, func } from 'prop-types';

import './checkBox.css';

const CheckBox = ({ onChange, checked = false, label = '' }) => (
  <div className="content">
    <input type="checkbox" id="checkbox" name="checkbox" checked={checked} onChange={onChange} />
    <label htmlFor="checkbox">{label}</label>
  </div>
);

CheckBox.propTypes = {
  onChange: func.isRequired,
  checked: bool,
  label: string,
};

export default CheckBox;
