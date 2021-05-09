import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import storageSession from 'redux-persist/lib/storage/session'

import resourcesReducer from './resourcesSlice';
import userReducer from './userSlice';

const persistConfig = {
  key: 'root',
  storage: storageSession,
}

export default () => {
  let store = configureStore({
    reducer: {
      resources: persistReducer(persistConfig, resourcesReducer),
      user: persistReducer(persistConfig, userReducer)
    }
  });
  let persistor = persistStore(store);
  return { store, persistor }
}
