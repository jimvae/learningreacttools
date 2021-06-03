import { CREATE_TODO, 
    REMOVE_TODO, 
    MARK_AS_COMPLETE,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_FAILURE 
} from './actions';


const initialState = {
    isLoading:false,
    data: []
}

export const todos = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
    case CREATE_TODO: {
        const { todo } = payload;
        return {
            // spread operator
            ...state,
            data: state.data.concat(todo)
        };
    }
    case REMOVE_TODO: {
        // you are renaming to todoToRemove
        const { todo: todoToRemove } = payload;
        return {
            ...state,
            data: state.data.filter(todo => todo.id !== todoToRemove.id),
         };
    }
    case MARK_AS_COMPLETE: {
        const { todo: updatedTodo } = payload;
        return {
            ...state,
            data: state.data.map(todo => {
            if (todo.id === updatedTodo.id) {
                // spread operator, only modifies the stated fields
                return updatedTodo;
            }
            return todo
        }),
    };
}
    case LOAD_TODOS_SUCCESS: {
        const { todos } = payload;
        return {
            ...state,
            isLoading:false,
            data: todos 
        }
    }
    // if there is no body then it goes default
    case LOAD_TODOS_IN_PROGRESS: {
        return {
            ...state,
            isLoading: true
        };
    }
    case LOAD_TODOS_FAILURE: {
        return {
            ...state,
            isLoading: false
        };
    }
    default:
        return state;
    }
}


/*
    state.todos: {
        isLoading: true,
        data: [...]
    }
*/
