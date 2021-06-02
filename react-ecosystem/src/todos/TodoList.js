import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import NewTodoForm from './NewTodoForm';
// default value is empty array
const TodoList = ({ todos = [] }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        { todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
);

export default TodoList;