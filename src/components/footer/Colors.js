import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  checkColors,
  filterByColor,
  selectFilters,
  uncheckColors,
} from '../../store/filters';
import styles from './Footer.module.css';

const Colors = () => {
  const { colors } = useSelector(selectFilters);
  const { selectedColors } = useSelector(selectFilters);
  const dispatch = useDispatch();

  function handleChange({ target }) {
    if (target.checked) {
      dispatch(checkColors(target.name));
    } else {
      dispatch(uncheckColors(target.name));
    }
    dispatch(filterByColor());
  }

  function handleCheck(color) {
    return selectedColors.includes(color);
  }

  const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

  return (
    <div className={styles.colors}>
      <h5>Filter by Color</h5>
      {colors.map((color) => (
        <label key={color}>
          <input
            type='checkbox'
            name={color}
            value={color}
            checked={handleCheck(color)}
            onChange={handleChange}
          />
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
