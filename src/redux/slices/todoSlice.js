import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  count: 0,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.data.push(action.payload);
      state.count++;
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
