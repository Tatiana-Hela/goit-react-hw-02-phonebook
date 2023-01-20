import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';
import { nanoid } from 'nanoid';

const Filter = ({ value, onChange }) => {
  const filterId = nanoid();
  return (
    <label className={css.label} htmlFor={filterId}>
      Find contacts by name
      <input className={css.input} type="text" placeholder='Enter name...' value={value} onChange={onChange} id={filterId} />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
