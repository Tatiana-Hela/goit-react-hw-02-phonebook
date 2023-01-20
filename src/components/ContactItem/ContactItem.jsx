import PropTypes from 'prop-types';
// import css from '../ContactItem/ContactItem.module.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <li key={id}>
        {name}: {number}
      </li>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
