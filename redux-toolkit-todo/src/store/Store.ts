import { configureStore } from "@reduxjs/toolkit";
import { PERSIST, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todoReducer from "./../features/todo/TodoSlice";
import authReducer from "./../features/auth/AuthSlice";

const todoPersistConfig = {
    key: 'todos',
    storage,
    // blacklist: [''], // Specify the state slices that should not be persisted
  };
  
  // const authPersistConfig = {
  //   key: 'auth',
  //   storage,
  //   whitelist: ['isAuthenticated', 'user'], // Specify the state slices that should be persisted
  // };
  
  const persistedTodoReducer = persistReducer(todoPersistConfig, todoReducer);
  // const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
  
  export const store = configureStore({
    reducer: {
      todos: persistedTodoReducer,
      auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredActions: [PERSIST],
      },
    }),
  });
  
  export const persistor = persistStore(store);
