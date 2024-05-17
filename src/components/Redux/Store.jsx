// store.js
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './UserSlice';
import projectReducer from './ProjectSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root', // Key for the root of your state object in localStorage
  storage,      // Storage method (localStorage in this case)
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);
const persistedProjectReducer = persistReducer(persistConfig, projectReducer);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    project: persistedProjectReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'],
    },
  }),
});

const persistor = persistStore(store);

export { store, persistor };
