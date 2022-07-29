// lib
import { createSlice } from "@reduxjs/toolkit";
import {
  getCurrentUser,
  removeCurrentUser,
  setCurrentUser,
} from "../../utils/helperFunctions";

const initialState = getCurrentUser();

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (_, action) => {
      setCurrentUser(action.payload);
      return action.payload;
    },
    getUser: (_, action) => {
      return getCurrentUser();
    },
    removeUser: (_, action) => {
      removeCurrentUser();
      return null;
    },
  },
});

export const { setUser, getUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
