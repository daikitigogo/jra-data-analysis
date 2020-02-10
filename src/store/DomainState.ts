import { createSlice } from '@reduxjs/toolkit';
import UDate from '../util/UDate';
import { SpecialityRaceData } from '../page/SpecialityRace';

const DomainState = createSlice({
  name: 'Domain',
  initialState: {
    sysdate: new UDate().truncate(),
    sidebar: {
      items: []
    },
    specialityRace: {
      selectors: [],
      records: []
    } as SpecialityRaceData,
  },
  reducers: {
    setSysdate: (state, action) => {
      return Object.assign({}, state, { sysdate: action.payload });
    },
    setSidebar: (state, action) => {
      return Object.assign({}, state, { sidebar: action.payload });
    },
    setSpecialityRace: (state, action) => {
      return Object.assign({}, state, { specialityRace: action.payload });
    },
  }
});

export default DomainState.reducer;
export const { setSysdate, setSidebar, setSpecialityRace } = DomainState.actions;
