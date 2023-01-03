
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import styles from "../pages/app.module.css"

export default function Register() {
  return (
    <div className={styles.formStyleItem}>
        <title>Registration</title>
      <RegisterForm />
    </div>
  );
}
