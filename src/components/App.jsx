import { Component } from 'react';
import { nanoid } from 'nanoid';
import initialContacts from '../data/contacts.json';
import ContactForm from './contact_form/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contact_list/ContactList';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = (name, number) => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: nanoid(), name: name, number: number },
      ],
    }));
  };

  handleChange = value => {
    this.setState({ filter: value });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleChange} />
        <ContactList data={this.state} />
      </div>
    );
  }
}
