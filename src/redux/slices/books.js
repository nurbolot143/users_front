import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const { data } = await axios.get("/books");
  return data;
});

export const fetchBook = createAsyncThunk("books/fetchBook", async (id) => {
  const { data } = await axios.get(`/books/${id}`);
  return data;
});

const initialState = {
  items: [],
  book: null,
  status: "loading",
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: {
    // get Books
    [fetchBooks.pending]: (state) => {
      state.items = [];
      state.status = "loading";
    },
    [fetchBooks.fulfilled]: (state, action) => {
      (state.items = action.payload), (state.status = "loaded");
    },
    [fetchBooks.rejected]: (state) => {
      state.items = null;
      state.status = "error";
    },

    // get Book
    [fetchBook.pending]: (state) => {
      state.book = null;
      state.status = "loading";
    },
    [fetchBook.fulfilled]: (state, action) => {
      (state.book = action.payload), (state.status = "loaded");
    },
    [fetchBook.rejected]: (state) => {
      state.book = null;
      state.status = "error";
    },
  },
});

const booksReducer = booksSlice.reducer;

export default booksReducer;
