import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing, selectUser } from '../redux/auth/selector';

export const useAuth = () => {
  const isLoggetIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  return {
    isLoggetIn,
    isRefreshing,
    user,
  };
};
