import { createSlice } from '@reduxjs/toolkit';
import UDate from '../util/UDate';

const DomainState = createSlice({
  name: 'Domain',
  initialState: {
    sysdate: new UDate().truncate(),
    sidebarMenu: {
      items: []
    },
  },
  reducers: {
    updateSysdate: state => {
      return Object.assign({}, state, { sysdate: new UDate().truncate() });
    },
    setSidebarMenu: (state, action) => {
      return Object.assign({}, state, { sidebarMenu: action.payload });
    },
  }
});

export default DomainState.reducer;
export const { setSidebarMenu, updateSysdate } = DomainState.actions;
