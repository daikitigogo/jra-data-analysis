import { createSlice } from '@reduxjs/toolkit';

const UIState = createSlice({
  name: 'UIState',
  initialState: {
    defaultClasses: {} as any,
    sidebarOpen: false,
  },
  reducers: {
    setSidebarOpen: (state) => Object.assign({}, state, { sidebarOpen: !state.sidebarOpen }),
    setDefaultClasses: (state, action) => Object.assign({}, state, { defaultClasses: action.payload }),
  }
});

export default UIState.reducer;
export const { setSidebarOpen, setDefaultClasses } = UIState.actions;
