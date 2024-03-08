import { useDispatch } from 'react-redux';
import { useAuth } from '../../hook/useAuth';
import { logOut } from '../../redux/auth/operationAuth';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  console.log(user.name);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button className={css.button} type="button" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};
