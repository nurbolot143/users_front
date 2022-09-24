import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./slices/books";
import usersReducer from "./slices/users";

const store = configureStore({
  reducer: {
    users: usersReducer,
    books: booksReducer,
  },
});

export default store;
