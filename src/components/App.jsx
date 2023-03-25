import { Component } from 'react';
import { nanoid } from 'nanoid';
import initialContacts from '../data/contacts.json';
import ContactForm from './contact_form/ContactForm';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
    // name: '',
    // number: '',
  };

  addContact = (name, number) => {
    // console.log(name);
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: nanoid(), name: name, number: number },
      ],
    }));
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input
          value={this.state.filter}
          onChange={this.handleChange}
          type="search"
          name="filter"
          id=""
        />
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
