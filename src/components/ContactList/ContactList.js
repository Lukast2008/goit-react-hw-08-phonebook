import { useSelector } from 'react-redux';
import { Contacts } from '../Contacts/Contacts';
import {
  selectAllContacts,
  filterContactSelector,
} from 'redux/contact/contactSelectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);

  const filterContact = useSelector(filterContactSelector);

  const filterAtContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterContact.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filterAtContacts.map(({ id, name, number }) => (
        <li className={css.listItem} key={id}>
          <Contacts id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};
