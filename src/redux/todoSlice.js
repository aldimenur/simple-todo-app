import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: "todo1", desc: "ANJAY MABAR", completed: false },
    { id: 2, title: "todo2", desc: "ANJAY MABAR", completed: false },
    { id: 3, title: "todo3", desc: "ANJAY MABAR", completed: true },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        desc: action.payload.desc,
        completed: false,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].desc = action.payload.desc;
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
