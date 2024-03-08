import { useDispatch } from 'react-redux';
import { RegisterForm } from '../../components/Register/RegisterForm';
import { register } from '../../redux/auth/operationAuth';

export default function RegisterPage() {
  const dispatch = useDispatch();

  const handleRegister = formData => {
    const { credentials } = formData;
    dispatch(register({ credentials }));
  };

  return (
    <div>
      <h1>Registration</h1>
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
}
