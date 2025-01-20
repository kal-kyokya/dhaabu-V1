// src/pages/Login.jsx

// src/pages/Signup.jsx

// src/pages/Dashboard.jsx
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const login = ({email, password}) => {
  const auth = `Basic ${email}:${password}`;
  const headers = new Headers();
  headers.append("authorization", auth);
  
  return API.get('/signIn', {headers});
};
export const signup = (data) => API.post('/users/signUp', data);

