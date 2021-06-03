import { expect } from 'chai';
import { todos } from '../reducers';

describe('The todos reducer', () => {
    it('Adds a new todo when CREATE_TODO action is recieved', () => {
        const fakeTodo = { text: 'hello', isCompleted: false };
        const fakeAction = {
            type: 'CREATE_TODO',
            payload: {
                todo: fakeTodo,
            },
        };
        const originalState = { isLoading: false, data: [] };
        const expected = {
            isLoading: false,
            data: [fakeTodo],
        };
        const actual = todos(originalState, fakeAction);

        // this is the only line that is compulsory / same for most tests
        expect(actual).to.deep.equal(expected);
    })
})