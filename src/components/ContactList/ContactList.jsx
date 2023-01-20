import PropTypes from 'prop-types';
// import css from '../ContactList/ContactList.module.css';

import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        console.log(id);
        return (
          <ContactItem
            id={id}
            key={id}
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
          />
        );
      })}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
