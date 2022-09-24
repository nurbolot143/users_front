import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const { data } = await axios.get("/users");

  const res = data.map(({ created_at, updated_at, ...other }) => {
    created_at = created_at.slice(0, 10) + " / " + created_at.slice(11, 16);
    updated_at = updated_at.slice(0, 10) + " / " + updated_at.slice(11, 16);

    return {
      ...other,
      created_at,
      updated_at,
    };
  });

  return res;
});

export const fetchUser = createAsyncThunk("users/fetchUser", async (id) => {
  const { data } = await axios.get(`/users/${id}`);
  return data;
});

export const fetchAddUserBook = createAsyncThunk(
  "users/fetchAddUserBook",
  async (params) => {
    await axios.post(`/users/books/${params.id}`, params);
  }
);

const initialState = {
  items: [],
  user: null,
  status: "loading",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    // get Users
    [fetchUsers.pending]: (state) => {
      state.items = [];
      state.status = "loading";
    },
    [fetchUsers.fulfilled]: (state, action) => {
      (state.items = action.payload), (state.status = "loaded");
    },
    [fetchUsers.rejected]: (state) => {
      state.items = [];
      state.status = "error";
    },

    // get User
    [fetchUser.pending]: (state) => {
      state.user = [];
      state.status = "loading";
    },
    [fetchUser.fulfilled]: (state, action) => {
      (state.user = action.payload), (state.status = "loaded");
    },
    [fetchUser.rejected]: (state) => {
      state.user = [];
      state.status = "error";
    },
  },
});

const usersReducer = usersSlice.reducer;

export default usersReducer;
