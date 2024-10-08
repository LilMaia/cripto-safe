import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/inititalPage/counterReducer';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;