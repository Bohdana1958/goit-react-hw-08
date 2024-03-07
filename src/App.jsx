import { SearchBox } from './components/SearchBox/SearchBox';
import { ContactList } from './components/ContactList/ContactList';
import { ContactForm } from './components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContact } from './redux/operations';
import { selectIsError, selectIsLoading } from './redux/selectors';
import { AppBar } from './components/AppBar/AppBar';
import { useAuth } from './hook/useAuth';
import { refreshUser } from './redux/auth/operationAuth';

export const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchContact());
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div>
      <AppBar />
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {loading && !error && <b>Request in progress...</b>}
    </div>
  );
};
