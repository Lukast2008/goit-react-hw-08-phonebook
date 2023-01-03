import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { fetchContacts } from 'redux/contact/contactsOperations';
import { selectLoading } from 'redux/contact/contactSelectors';
import { FilterContacts } from 'components/Filter/Filter';
import styles from "../pages/app.module.css"

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.formStyleItem}>
      <title>Your Contact</title>
      <ContactEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <FilterContacts/>
      <ContactList/>
    </div>
  );
}
