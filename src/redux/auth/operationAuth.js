import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkApi) => {
  try {
    const response = await axios.post('/users/signup', credentials);
    setAuthHeader(response.data.token);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkApi) => {
  try {
    const response = await axios.post('/users/login', credentials);
    setAuthHeader(response.data.token);
    console.log(response);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk('auth/ refresh', async (_, thunkApi) => {
  const state = thunkApi.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkApi.rejectWithValue('Unable to fetch user');
  }
  try {
    setAuthHeader(persistedToken);
    const response = await axios.get('/users/current');
    console.log(response);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

// export const register = createAsyncThunk(
//   'auth/register',
//   async ({ credentials, token }, thunkApi) => {
//     try {
//       const response = await axios.post('/users/signup', credentials);
//       setAuthHeader(token);
//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const register = createAsyncThunk('auth/register', async ({ credentials }, thunkApi) => {
//   try {
//     const response = await axios.post('/users/signup', credentials);
//     // Отримання токену з відповіді сервера після реєстрації
//     const token = response.data.token;
//     // Отримання інших даних користувача
//     const user = response.data.user;

//     // Встановлення токену для авторизації запитів
//     setAuthHeader(token);

//     // Повернення об'єкта з даними користувача та токеном
//     return { user, token };
//   } catch (error) {
//     return thunkApi.rejectWithValue(error.message);
//   }
// });

// export const logIn = createAsyncThunk('auth/login', async ({ credentials, token }, thunkApi) => {
//   try {
//     const response = await axios.post('/users/login', credentials);
//     setAuthHeader(token);
//     return response.data;
//   } catch (error) {
//     return thunkApi.rejectWithValue(error.message);
//   }
// });

// export const logOut = createAsyncThunk('auth/logout', async ({ token }, thunkApi) => {
//   try {
//     await axios.post('/users/logout');
//     clearAuthHeader();
//   } catch (error) {
//     return thunkApi.rejectWithValue(error.message);
//   }
// });

// export const refreshUser = createAsyncThunk('auth/refresh', async ({ token }, thunkApi) => {
//   if (!token) {
//     return thunkApi.rejectWithValue('Unable to fetch user');
//   }
//   try {
//     setAuthHeader(token);
//     const response = await axios.get('/users/me');
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     return thunkApi.rejectWithValue(error.message);
//   }
// });
