import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  visible: false,
};

const snackBarSlice = createSlice({
  name: "snackBar",
  initialState,
  reducers: {
    setSnackBar: (state, action) => action.payload,
    clearSnackBar: () => initialState,
  },
});

export const { setSnackBar, clearSnackBar } = snackBarSlice.actions;
export default snackBarSlice.reducer;
