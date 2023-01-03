import { useDispatch } from 'react-redux';
import { deleteContact} from 'redux/contact/contactsOperations';
import css from './Contact.module.css';
import PropTypes from 'prop-types';

export const Contacts = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{name}</p>
      <p className={css.text}>{number}</p>
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};


Contacts.propTypes ={
  id:   PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
}.isRequired