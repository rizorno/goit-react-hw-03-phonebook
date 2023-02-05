import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './contact-form.module.scss';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeInputForm = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.submitForm(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const idElement = nanoid();

    return (
      <form onSubmit={this.handleSubmitForm} className={css.form}>
        <label>
          Name
          <input
            id={idElement}
            onChange={this.handleChangeInputForm}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoComplete="off"
          />
        </label>

        <label>
          Number
          <input
            id={idElement}
            onChange={this.handleChangeInputForm}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            autoComplete="off"
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = { submitForm: PropTypes.func.isRequired };

export default ContactForm;
