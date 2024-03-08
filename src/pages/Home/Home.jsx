import { NavLink } from 'react-router-dom';
import css from './Home.module.css';
import { useAuth } from '../../hook/useAuth';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <div className={css.box}>
      <h1 className={css.text}>Welcome to Contact!</h1>
      <button className={css.button}>
        {isLoggedIn ? (
          <NavLink to="/contacts" className={css.link}>
            Get Started
          </NavLink>
        ) : (
          <NavLink to="/register" className={css.link}>
            Get Started
          </NavLink>
        )}
      </button>
    </div>
  );
}
