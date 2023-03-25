import { Component } from 'react';
import { nanoid } from 'nanoid';
import initialContacts from '../data/contacts.json';
import ContactForm from './contact_form/ContactForm';
import Filter from './filter/Filter';

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
        <ul>
          {!this.state.filter
            ? this.state.contacts.map(({ id, name, number }) => (
                <li key={id}>
                  {name}: {number}
                </li>
              ))
            : this.state.contacts
                .filter(contact =>
                  contact.name.toLowerCase().includes(this.state.filter)
                )
                .map(({ id, name, number }) => (
                  <li key={id}>
                    {name}: {number}
                  </li>
                ))}
        </ul>
      </div>
    );
  }
}
