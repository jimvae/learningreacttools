import 'node-fetch';
import fetchMock from 'fetch-mock';
import { expect } from 'chai';
import sinon from 'sinon';
import { loadTodos } from '../thunks.js';


describe('The loadTodos thunk', () => {
    it('Dispatches the correct actions  in the success scenario', async () => {
        const fakeDispatch = sinon.spy();

        const fakeTodos = [{ text: '1' }, { text: '2' }];
        fetchMock.get('http://localhost:8080/todos', fakeTodos);

        const expectedFirstAction = { type: 'LOAD_TODOS_IN_PROGRESS'};
        const expectedSecondAction = { 
            type: 'LOAD_TODOS_SUCCESS',
            payload: {
                todos: fakeTodos,
            },
        };

        await loadTodos()(fakeDispatch);

        expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction);
        expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction);
        fetchMock.reset();
        /* We have to test that our loadTodos dispatch the 
        actions that we expected it to in the correct order. 
        And we do that like this. We say expect fakeDispatch.getCall(0). 
        This is referring to the first call that was made to our 
        fakeDispatch. .args[0], which is referring to the first argument 
        that was passed during the first call to FakeDispatch. 
        And then we're going to say that we want that to.deep.equal our 
        expectedFirstAction. And likewise we'll do the same thing with 
        the expectedSecondAction. We'll say expect(fakeDispatch.getCall(1), 
        the second time fakeDispatch was called, .args[0].to.deep.equal(expectedSecondAction). */

    });
});