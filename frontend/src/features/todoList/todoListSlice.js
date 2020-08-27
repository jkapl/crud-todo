import { createSlice } from '@reduxjs/toolkit';

import { getTodos } from '../../api/getTodos';

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState: {
        todos: []
    },
    reducers: {
        updateTodoList: (state, action) => {
            const { todos } = action.payload;
            state.todos = todos
        }
    }
})

export const {
    updateTodoList
} = todoListSlice.actions;

export const updateTodoListAsync = (user) => async dispatch => {
    try {
        const todos = await getTodos(user)
        console.log(todos)
        dispatch(updateTodoList(todos))
    } catch (err) {
        console.log(err)
    }
}


export const selectTodoListState = state => state.todoList.todos

export default todoListSlice.reducer;