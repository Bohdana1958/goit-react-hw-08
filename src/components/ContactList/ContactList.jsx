import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { deleteContact } from '../../redux/operations';
import { selectFilter, selectItems } from '../../redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const filterValue = useSelector(selectFilter);

  const filteredItems = items.filter(
    item => item && item.name && item.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const deleteUsers = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {filteredItems.map(item => (
        <Contact key={item.id} item={item} onDelete={deleteUsers} />
      ))}
    </ul>
  );
};
