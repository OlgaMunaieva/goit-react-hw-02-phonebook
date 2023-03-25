import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    this.state.contacts.push({
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    });
    name.value = '';
    number.value = '';
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form action="" onSubmit={this.handleOnSubmit}>
          <label htmlFor="" name="name">
            Name
            <input
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="" name="number">
            Number
            <input
              value={this.state.number}
              onChange={this.handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
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
