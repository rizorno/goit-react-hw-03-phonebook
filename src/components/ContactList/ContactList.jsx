import React from 'react';
import PropTypes from 'prop-types';
import css from './contact-list.module.scss';

function ContactList({ contacts = [], filter, deleteContact }) {
  // eslint-disable-next-line array-callback-return
  const elements = contacts.map(element => {
    const { id, name, number } = element;
    const findElementName = name.toLowerCase().includes(filter.toLowerCase());
    const findElementNumber = number.includes(filter);

    if (findElementName) {
      return (
        <li key={id}>
          <div className={css.box}>
            <p className={css.name}>{name}:</p>
            <p className={css.number}>{number}</p>
          </div>
          <button type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      );
    } else if (findElementNumber) {
      return (
        <li key={id}>
          <div className={css.box}>
            <p className={css.name}>{name}:</p>
            <p className={css.number}>{number}</p>
          </div>
          <button type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      );
    }
  });

  return <ul>{elements}</ul>;
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
