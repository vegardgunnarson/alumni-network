import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {},
    status: 'idle',
}

export const userSlice = createSlice({
    id: 'id',
    name: 'user',
    picture: 'https://i.pinimg.com/736x/d7/3b/c1/d73bc1381fb1380112a98266b6f2d27f.jpg',
    initialState,
    reducers: {
      updateUser: (state, action) => {
        state.value = action.payload;
      },
      resetUser: (state) => {
        state.value = {};
      },
      updateBio: (state, action) => {
        state.value.description = action.payload;
      },
      updateStatus: (state, action) => {
        state.value.status = action.payload;
      },
      updateFunfact: (state, action) => {
        state.value.funfact = action.payload;
      },
  
    },
  });
  
  export const { updateUser, resetUser, updateDescription } = userSlice.actions;
  
  
  export const selectUser = (state) => state.user.value;
  
  
  export default userSlice.reducer;