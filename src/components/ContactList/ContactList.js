import { useSelector } from 'react-redux';
import { Contacts } from '../Contacts/Contacts';
import { selectAllContacts } from 'redux/contact/contactSelectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);

  return (
    <ul className={css.list}>
      {contacts.map(({ id, text }) => (
        <li key={id}>
          <Contacts id={id} text={text} />
        </li>
      ))}
    </ul>
  );
};
