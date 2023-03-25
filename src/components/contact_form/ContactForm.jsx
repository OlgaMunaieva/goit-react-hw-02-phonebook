import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  resetForm = (name, number) => {
    name.value = '';
    number.value = '';
    this.setState({ name: '', number: '' });
  };

  checkForAvailability = () => {
    !this.props.contacts.find(
      contact => contact.name.toLowerCase() === this.state.name.toLowerCase()
    )
      ? this.props.addContact(this.state.name, this.state.number)
      : alert(`${this.state.name} is already in contacts`);
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    this.checkForAvailability();
    this.resetForm(name, number);
  };

  render() {
    return (
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
    );
  }
}

export default ContactForm;
