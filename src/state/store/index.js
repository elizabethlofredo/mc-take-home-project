import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import reducer from '../reducers';

const getStore = () => {
  const store = configureStore({
    reducer,
  });

  const persistor = persistStore(store);

  return { store, persistor };
};

export default getStore;
