import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeNavMenu: "Home"
};

const navMenuSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    setActiveNavMenu: (state, action) => {
      state.activeNavMenu = action.payload;
    }
  }
});

export const { setActiveNavMenu } = navMenuSlice.actions;
export default navMenuSlice.reducer;