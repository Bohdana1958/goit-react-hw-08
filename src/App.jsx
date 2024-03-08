import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { useAuth } from './hook/useAuth';
import { refreshUser } from './redux/auth/operationAuth';
// import { ContactsPage } from './pages/Contacts/ContactsPage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
// import Home from './pages/Home/Home';
// import RegisterPage from './pages/RegisterPage/RegisterPage';
// import LoginPage from './pages/LogIn/LoginPage';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import NotFoundPage from './pages/Not Found Page/NotFoundPage';

const Home = lazy(() => import('./pages/Home/Home'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LogIn/LoginPage'));
const ContactsPage = lazy(() => import('./pages/Contacts/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
