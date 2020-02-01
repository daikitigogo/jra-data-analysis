import { createSlice } from '@reduxjs/toolkit';

const UIState = createSlice({
  name: 'UIState',
  initialState: {
    sidebarOpen: false,
  },
  reducers: {
    setSidebarOpen: (state) => Object.assign({}, state, { sidebarOpen: !state.sidebarOpen }),
  }
});

export default UIState.reducer;
export const { setSidebarOpen } = UIState.actions;
