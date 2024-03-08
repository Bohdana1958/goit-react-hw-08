import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operationAuth';
import css from './LoginForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { NavLink } from 'react-router-dom';

const loginSchema = Yup.object().shape({
  email: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  password: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const emailId = useId();
  const passId = useId();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        console.log('login success');
      })
      .catch(() => {
        console.log('login error');
      });
    form.reset();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <div className={css.formGroup}>
          <label className={css.label} htmlFor={emailId}>
            Email:
          </label>
          <Field type="text" name="email" id={emailId} autoComplete="username" />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>
        <div className={css.formGroup}>
          <label className={css.label} htmlFor={passId}>
            Password:
          </label>
          <Field type="password" name="password" id={passId} autoComplete="current-password" />
        </div>
        <button className={css.button} type="submit">
          Log In
        </button>
        <button className={css.buttonReg}>
          <NavLink to="/register" className={css.link}>
            Don`t have an account? Register here
          </NavLink>
        </button>
      </Form>
    </Formik>
  );
};
