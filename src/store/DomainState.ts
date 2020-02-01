import { createSlice } from '@reduxjs/toolkit';


const DomainState = createSlice({
  name: 'Domain',
  initialState: {
    title: 'All-for-win',
    sidebarMenu: {
      items: []
    },
  },
  reducers: {
    setSidebarMenu: (state, action) => {
      return Object.assign({}, state, { sidebarMenu: action.payload });
    },
  }
});

export default DomainState.reducer;
export const { setSidebarMenu } = DomainState.actions;
