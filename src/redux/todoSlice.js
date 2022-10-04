import { createSlice } from "@reduxjs/toolkit";

const intialValue = {
  data: [],
};
export const todoSlice = createSlice({
  name: "input",
  initialState: intialValue,
  reducers: {
    ADD_TODO: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    COMPLETED_TODO: (state, action) => {
      console.log(action);
      console.log(state);
      let temp = [...state.data];
      temp[action.payload].completed = !temp[action.payload].completed;
      state.data = temp;
    },
    DELETE_TODO: (state, action) => {
      state.data = state.data.filter((val) => val.id !== action.payload);
    },
  },
});
export const { ADD_TODO, COMPLETED_TODO, DELETE_TODO } = todoSlice.actions;
export default todoSlice.reducer;