import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/users/users-operations';

export default function UpdateUserForm({ selectedUser, closeUpdateForm }) {
  const dispatch = useDispatch();

  const [name, setName] = useState(selectedUser.name);
  const [email, setEmail] = useState(selectedUser.email);

  const handleSubmit = e => {
    e.preventDefault();
    // console.log('first', { ...selectedUser, name, email });
    dispatch(updateUser({ ...selectedUser, name, email }));
    closeUpdateForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        type="text"
        name="name"
        onChange={e => setName(e.target.value)}
      />
      <input
        value={email}
        type="text"
        name="email"
        onChange={e => setEmail(e.target.value)}
      />
      <button>Update User</button>
    </form>
  );
}
