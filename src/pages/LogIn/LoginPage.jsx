import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operationAuth';
import { LoginForm } from '../../components/LoginForm/LoginForm';

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleLogIn = formData => {
    const { credentials } = formData;
    console.log(formData);
    dispatch(logIn({ credentials }));
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={handleLogIn} />
    </div>
  );
}
