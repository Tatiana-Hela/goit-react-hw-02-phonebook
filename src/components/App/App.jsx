import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from '../App/App.module.css';

import ContactForm from 'components/ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = (name, number) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const isNameAdded = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const isNumberAdded = contacts.some(contact => contact.number === number);

    if (isNameAdded) {
      // Notify.failure(`${name} is alredy in contacts`);
      return false;
    } else if (isNumberAdded) {
      // Notify.failure(`${number} is alredy in contacts`);
      return false;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));

    return true;
  };

  render() {
    return (
      <>
        <h2 className={css.title}>Phonebook</h2>
        <ContactForm onSubmit={this.addNewContact} />
        <h2 className={css.title}>Contacts</h2>
        <ul>
          <li></li>
        </ul>
      </>
    );
  }
}

export default App;
