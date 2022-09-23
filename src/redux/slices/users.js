import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  status: "loading",
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {},
});

const userReducer = usersSlice.reducer;

export default userReducer;
