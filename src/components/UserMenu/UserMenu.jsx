import { useDispatch } from 'react-redux';
import { useAuth } from '../../hook/useAuth';
import { logOut } from '../../redux/auth/operationAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut)}>
        Log Out
      </button>
    </div>
  );
};
