import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';
import { 
    getTodosLoading,
    getCompletedTodos,
    getIncompleteTodos } from './selectors.js';
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from './thunks';
// import { removeTodo, markTodoAsCompleted } from './actions';
// import { markTodoAsCompleted } from './actions';

// backticks represents tag functions 
// const BigRedText = styled.h1` -> can be an html components
const BigRedText = styled.button`
    font-size: 48px;
    color: #FF0000;
`;

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`;

const TodoList = ({ completedTodos, incompleteTodos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);
    
    const loadingMessage = <div>Loading todos...</div>;
    const content = (
        <ListWrapper>
            {/* <BigRedText>I'm a Styled-Component!</BigRedText> */}
            <NewTodoForm />
            <h3>Incomplete:</h3>
            {incompleteTodos.map(
                todo => <TodoListItem
                todo={todo}
                onRemovePressed={onRemovePressed}
                onCompletedPressed={onCompletedPressed}/>
                )
            }
            <h3>Completed:</h3>
            {completedTodos.map(
                todo => <TodoListItem
                todo={todo}
                onRemovePressed={onRemovePressed}
                onCompletedPressed={onCompletedPressed}/>
                )
            }
            
        </ListWrapper>
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state)
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);