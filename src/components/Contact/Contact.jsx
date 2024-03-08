import { FaPhone } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';
import css from '../ContactList/ContactList.module.css';

export const Contact = ({ item, onDelete }) => {
  return (
    <li key={item.id} className={css.listItem}>
      <div className={css.wrapper}>
        <p className={css.text}>
          <IoPersonSharp className={css.icon} />
          {item.name}
        </p>
        <p className={css.text}>
          <FaPhone className={css.icon} />
          {item.number}
        </p>
      </div>
      <button className={css.delete} onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </li>
  );
};
