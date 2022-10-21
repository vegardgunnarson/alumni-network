import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {},
    status: 'idle',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      updateUser: (state, action) => {
        state.value = action.payload;
      },
      resetUser: (state) => {
        state.value = {};
      },
      updateDescription: (state, action) => {
        state.value.description = action.payload;
      },
  
    },
  });
  
  export const { updateUser, resetUser, updateDescription } = userSlice.actions;
  
  
  export const selectUser = (state) => state.user.value;
  
  
  export default userSlice.reducer;