import { CREATE_TODO, 
    REMOVE_TODO, 
    MARK_AS_COMPLETE,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_FAILURE 
} from './actions';
export const isLoading = (state = false, action) => {
    const { type } = action;
    switch (type) {
        case LOAD_TODOS_IN_PROGRESS: {
            return true;
        }
        case LOAD_TODOS_SUCCESS: 
            // if there is no body then it goes default
        case LOAD_TODOS_FAILURE:
            return false;
            // return false;

        default:
            return state;
    }
}
export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
    case CREATE_TODO: {
        const { todo } = payload;
        return state.concat(todo);
    }
    case REMOVE_TODO: {
        // you are renaming to todoToRemove
        const { todo: todoToRemove } = payload;
        return state.filter(todo => todo.id !== todoToRemove.id);
    }
    case MARK_AS_COMPLETE: {
        const { todo: updatedTodo } = payload;
        return state.map(todo => {
            if (todo.id === updatedTodo.id) {
                // spread operator, only modifies the stated fields
                return updatedTodo;
            }
            return todo;
        });
    }
    case LOAD_TODOS_SUCCESS: {
        const { todos } = payload;
        return todos; 
    }
    // if there is no body then it goes default
    case LOAD_TODOS_IN_PROGRESS: 
    case LOAD_TODOS_FAILURE:
    default:
        return state;
    }
}
