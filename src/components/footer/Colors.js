import React from 'react';
import { availableColors } from '../../features/filters/colors';
import { capitalize } from '../../features/filters/colors';
import styles from './Footer.module.css';

const Colors = () => {
  return (
    <div className={styles.colors}>
      <h5>Filter by Color</h5>
      {availableColors.map((color) => (
        <label key={color}>
          <input type='checkbox' name={color} />
          <span
            className={styles.colorBlock}
            style={{ backgroundColor: color }}
          ></span>
          {capitalize(color)}
        </label>
      ))}
    </div>
  );
};

export default Colors;
