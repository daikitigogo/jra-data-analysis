import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import DomainReducer from './DomainState';
import UIReducer from "./UIState";
import logger from 'redux-logger';

const reducer = combineReducers({
  domain: DomainReducer,
  ui: UIReducer
});

const middleware = process.env.NODE_ENV === 'development' ? [logger] : [];

const store = configureStore({ reducer, middleware });

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
