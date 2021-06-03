import { createSelector } from 'reselect';

export const getTodos = state => state.todos.data;
export const getTodosLoading = state => state.todos.isLoading;


// we can pass as many selectors here and the last
// selector will get all the results of the selector before it
// export const getIncompleteTodos = createSelector(
//     getTodos,
//     getTodosLoading, 
//     (todos, isLoading) => isLoading
//         ? todos
//         : todos.filter(todo => !todo.isCompleted),
// );

export const getIncompleteTodos = createSelector(
    getTodos, 
    (todos) => todos.filter(todo => !todo.isCompleted),
);

// Memoization ->
export const getCompletedTodos = createSelector(
    getTodos, 
    (todos) => todos.filter(todo => todo.isCompleted),
);

// getCompletedTodos.resultFunc(fakeTodos) to get the last function for this case


// advantage of using this, it only rerender if
// return values of the previous selectors change
// save on calculation