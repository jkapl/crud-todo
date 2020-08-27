/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectTodoListState, 
    updateTodoListAsync
} from './todoListSlice';

export function TodoList() {
    const todos = useSelector(selectTodoListState)
    const dispatch = useDispatch()

    useEffect(() => {
        const intervalID = setInterval(() => dispatch(updateTodoListAsync('joel')), 3000)
        return () => clearInterval(intervalID)
    },[])


    if (todos.length > 0) {
        let todoList = todos.map((todo, idx) => {
            return (
                <li>
                    <p><strong>{todo.title}</strong> | {todo.details}</p>
                </li>
            )
        });
        return (
            <ul>
                {todoList}
            </ul>
        )
    } else {
        return <p>No todos</p>
    }

}