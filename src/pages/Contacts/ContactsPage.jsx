import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { fetchContact } from '../../redux/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const ContactPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);
  return (
    <div>
      <h1>Phone Book</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
