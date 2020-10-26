import React from 'react';
import { bool, string, func } from 'prop-types';

import './checkBox.css';

const CheckBox = ({ onChange, checked = false, label = '' }) => (
  <label className="checkbox-container" >
    <input type="checkbox" checked={checked} onChange={onChange} />
    <span className="checkmark" />
    {label}
  </label>
);

CheckBox.propTypes = {
  onChange: func.isRequired,
  checked: bool,
  label: string,
};

export default CheckBox;
