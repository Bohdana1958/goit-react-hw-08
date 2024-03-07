import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsError, selectIsLoading } from './redux/selectors';
import { AppBar } from './components/AppBar/AppBar';
import { useAuth } from './hook/useAuth';
import { refreshUser } from './redux/auth/operationAuth';
import { ContactPage } from './pages/Contacts/ContactsPage';

export const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div>
      <AppBar />
      <ContactPage />
      {loading && !error && <b>Request in progress...</b>}
    </div>
  );
};
