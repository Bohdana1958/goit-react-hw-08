import { useDispatch } from 'react-redux';
import { RegisterForm } from '../../components/Register/RegisterForm';
import { register } from '../../redux/auth/operationAuth';
import css from './PegisterPage.module.css';

export default function RegisterPage() {
  const dispatch = useDispatch();

  const handleRegister = formData => {
    const { credentials } = formData;
    dispatch(register({ credentials }));
  };

  return (
    <div className={css.wrapper}>
      <h1 className={css.text}>Registration</h1>
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
}
