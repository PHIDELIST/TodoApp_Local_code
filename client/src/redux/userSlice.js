import { createSlice } from '@reduxjs/toolkit';


const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser)
const initialState = storedUser || {};

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    login: (state, action) => {
      const { name, token, email } = action.payload;
      console.log(action.payload)
      state.username = name;
      state.email = email;
      state.token = token;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.username = 'name';
      state.email = 'email';
      localStorage.removeItem('user');
    },
   
  },
});

export const { login, logout} = userSlice.actions;

export const selectUser = (state) => state.user;
console.log(selectUser)

export default userSlice.reducer;
