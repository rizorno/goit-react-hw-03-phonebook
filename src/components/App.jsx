import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const LOCAL_KEY_CONTACTS = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contactsLS = JSON.parse(localStorage.getItem(LOCAL_KEY_CONTACTS));
    if (contactsLS) {
      this.setState({ contacts: contactsLS });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      localStorage.setItem(
        LOCAL_KEY_CONTACTS,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  handleSubmit = ({ name, number }) => {
    const message = this.state.contacts.find(element => element.name === name);
    if (message) {
      alert(`${message.name} is already in contacts!`);
      return;
    } else {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  handleFilterContact = e => {
    this.setState({ filter: e.target.value });
  };

  handleDeleteContact = id => {
    this.setState(() => {
      return {
        ...this.state,
        contacts: this.state.contacts.filter(element => element.id !== id),
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm submitForm={this.handleSubmit} />

        <h2>Contacts</h2>

        <Filter filter={this.handleFilterContact} value={this.state.filter} />

        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          deleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
