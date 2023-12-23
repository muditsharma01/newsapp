// store.js
'use client';
import { createStore } from 'redux';
import favoritesReducer from './reducer';

const store = createStore(favoritesReducer);

export default store;
