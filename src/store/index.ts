import { combineReducers} from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import DomainReducer from './DomainState';
import UIReducer from "./UIState";

const reducer = combineReducers({
  domain: DomainReducer,
  ui: UIReducer
});

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
