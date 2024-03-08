import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { fetchContact } from '../../redux/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import css from './ContactSPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);
  return (
    <div className={css.wrapper}>
      <h1 className={css.text}>Phone Book</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
export default ContactsPage;
