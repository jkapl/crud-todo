import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoList/todoListSlice';

export default configureStore({
  reducer: {
    todoList: todoReducer
  },
});
