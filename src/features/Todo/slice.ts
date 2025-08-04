import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TaskType } from "../../types";

export type TodoState = {
  todos: TaskType[];
};

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<TaskType>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    markTodoAsComplete: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = true;
      }
    },
    updateTodo: (state, action: PayloadAction<TaskType>) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
  },
});

export const { createTodo, deleteTodo, markTodoAsComplete, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
