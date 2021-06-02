import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { removeTodo, markAsComplete } from './actions';
import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, onMarkAsCompletedPressed }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => 
            <TodoListItem 
                todo={todo} 
                onRemovePressed={onRemovePressed}
                onMarkAsCompletedPressed={onMarkAsCompletedPressed} 
            />)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onMarkAsCompletedPressed: text => dispatch(markAsComplete(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);