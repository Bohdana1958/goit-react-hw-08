import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operationAuth';

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input type="text" name="name" />
      </label>
      <label>
        {' '}
        Email <input type="email" name="email" />
      </label>
      <label>
        {' '}
        Password <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
