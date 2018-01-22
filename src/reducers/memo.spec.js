import reducer from './memo'

describe('Memo Reducer', () => {

    test('adds a todo', () => {

        const initialState = {
            memos: {
                1: { id: 1, title: 'memoTitle', url: 'http://www.memourl.com' },
                2: { id: 2, title: 'memoTitle', url: 'http://www.memourl.com' }
            }
        }

        const expectedState = {
            memos: {
                1: { id: 1, title: 'memoTitle', url: 'http://www.memourl.com' },
                2: { id: 2, title: 'memoTitle', url: 'http://www.memourl.com' },
                3: { id: 3, title: 'memoTitle', url: 'http://www.memourl.com' }
            }
        }

        const action = { type: 'MEMO_ADD', payload: { id: 3, title: 'memoTitle', url: 'http://www.memourl.com' }}
        const result = reducer(initialState, action);
        expect(result).toEqual(expectedState);

    })
















})




















































// import reducer from './todo'
//
// describe('Todo Reducer', () => {
//     test('adds a todo', () => {
//         const startState = {
//             todos: [
//                 {id: 1, name:'Create Static UI', isComplete: true},
//                 {id: 2, name:'Create Initial State', isComplete: false},
//                 {id: 3, name:'Use state to render UI', isComplete: false}
//             ]
//         }
//         const expectedState = {
//             todos: [
//                 {id: 1, name:'Create Static UI', isComplete: true},
//                 {id: 2, name:'Create Initial State', isComplete: false},
//                 {id: 3, name:'Use state to render UI', isComplete: false},
//                 {id: 4, name:'Added todo', isComplete: false}
//             ]
//         }
//         const action = {type:'TODO_ADD', payload: {id: 4, name:'Added todo', isComplete: false}}
//         const result = reducer(startState, action)
//         expect(result).toEqual(expectedState)
//     })
// })
