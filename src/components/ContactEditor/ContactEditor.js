import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contact/contactsOperations';
import css from './ContactEditor.module.css';

export const ContactEditor = () => {
  const [nameContact, setNameContact] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const inputName = [
    {
      name: 'name',
      pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
      title:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    },
    {
      name: 'number',
      pattern:
        '\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}',
      title:
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
    },
  ];

  const onChange = ev => {
    const { name, value } = ev.target;
    switch (name) {
      case 'name':
        setNameContact(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setNameContact('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addContact({ name: nameContact, phone: number }));

    reset();
  };

  return (
    <>
    <h2>PhoneBook</h2>
    <form className={css.form} onSubmit={handleSubmit}>
      {inputName.map(({ name, pattern, title }, index) => (
        <label key={name}>
          <input
            type="text"
            name={name}
            placeholder={name}
            value={!index ? nameContact : number}
            onChange={onChange}
            pattern={pattern}
            title={title}
            required
          ></input>
        </label>
      ))}
      <button type="submit" className={css.button}>
        Add Contact
      </button>
    </form>
    </>
  );
};
