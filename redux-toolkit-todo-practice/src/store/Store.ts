import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import todoReducer from './../features/todo/TodoSlice'

const todoPersistConfig = {
    key: 'todo1',
    storage,
}

const persistedTodoReducer = persistReducer(todoPersistConfig, todoReducer);

export const store = configureStore({
    reducer: {
        todos: persistedTodoReducer,
    },
    devTools: false,
});

export const persist = persistStore(store);