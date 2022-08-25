import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'klipusers',
  initialState: {user:{},isLogged:false},
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload, 
      state.isLogged =true;
    } ,
    signOut: (state, action) => {
      state.user = {}, 
      state.isLogged =false;
    }     
  },
});

export const userReducer = userSlice.reducer;

export const {
  addUser, 
  signOut
} = userSlice.actions;