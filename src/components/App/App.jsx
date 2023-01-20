import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from '../App/App.module.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
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
        <form className={css.form}>
          <label className={css.label}>
            Name
            <input
              className={css.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button className={css.button} type="submit">
            Add contacts
          </button>
        </form>
        <h2 className={css.title}>Contacts</h2>
        <ul>
          <li>{this.addNewContact}</li>
        </ul>
      </>
    );
  }
}

export default App;
