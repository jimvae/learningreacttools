import { CREATE_TODO, REMOVE_TODO, MARK_AS_COMPLETE } from './actions';

export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
    case CREATE_TODO: {
        const { text } = payload;
        const newTodo = {
            text,
            isCompleted: false,
        };
        return state.concat(newTodo);
    }
    case REMOVE_TODO: {
        const { text } = payload;
        return state.filter(todo => todo.text !== text);
    }
    case MARK_AS_COMPLETE: {
        const { text } = payload;
        return state.map(todo => {
            if (todo.text === text) {
                // spread operator, only modifies the stated fields
                return { ...todo, isCompleted: true};
            }
        })
    }
    default:
        return state;
    }
}