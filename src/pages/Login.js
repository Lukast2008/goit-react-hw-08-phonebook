import { LoginForm } from 'components/LoginForm/LoginForm';
import styles from '../pages/app.module.css';

export default function Login() {
  return (
    <div className={styles.formStyleItem}>
      <title>Login</title>
      <LoginForm />
    </div>
  );
}
