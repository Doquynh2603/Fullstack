import { createSlice } from "@reduxjs/toolkit";

const notificationReducer = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    setNotification(state, action) {
      return action.payload;
    },
    clearNotification(state, action) {
      return "";
    },
  },
});
export const showNotification = (message) => {
  return (dispatch) => {
    dispatch(setNotification(message));
    setTimeout(() => {
      dispatch(clearNotification(message));
    }, 5000);
  };
};
export const { setNotification, clearNotification } =
  notificationReducer.actions;
export default notificationReducer.reducer;
