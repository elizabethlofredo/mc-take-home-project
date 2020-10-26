import { configureStore } from '@reduxjs/toolkit';

import reducer from '../reducers';

const getStore = () => {
  const store = configureStore({
    reducer,
  });

  return store;
};

export default getStore;
