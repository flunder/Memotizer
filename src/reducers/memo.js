import {
    apiCreateMemo,
    apiDeleteMemo,
    apiFetchMemos,
    apiFetchCategories,
    apiUpdateMemo
} from '../lib/memoSevices'

const initialState = {
    memos: {},
    categories: {},
    categoryFilter: false
}

// ACTION-NAMES

const MEMOS_LOAD = 'MEMOS_LOAD'
const MEMO_ADD = 'MEMO_ADD'
const MEMO_REMOVE = 'MEMO_DELETE'
const MEMO_APPLYFILTER = 'MEMO_APPLYFILTER'
const MEMO_UPDATE = 'MEMO_UPDATE'

const CATEGORIES_LOAD = 'CATEGORIES_LOAD'

// ACTION CREATORS

const loadMemos = (memos) => (
    { type: MEMOS_LOAD, payload: memos }
)

const addMemo = (memo) => (
    { type: MEMO_ADD, payload: memo }
)

const removeMemo = (id) => (
    { type: MEMO_REMOVE, payload: { id } }
)

const updateMemo = (memoID, memo) => (
    { type: MEMO_UPDATE, payload: { memoID, memo } }
)

export const applyFilter = (val) => (
    { type: MEMO_APPLYFILTER, payload: { val } }
)

export const loadCategories = (categories) => (
    { type: CATEGORIES_LOAD, payload: { categories } }
)

// ASYNC ACTION CREATORS

export const fetchMemos = () => {
    return (dispatch, getState) => {
        const categoryFilter = getState().memo.categoryFilter;
        apiFetchMemos(categoryFilter)
            .then(memos => {
                let memosForState = {}
                memos.forEach(memo => {
                    memosForState[memo.id] = memo
                })
                dispatch(loadMemos(memosForState))
            })
    }
}

export const createMemo = ({title, url}) => {
    return (dispatch) => {
        const newMemo = { title, url, notes: {} }
        apiCreateMemo(newMemo)
            .then(res =>
                dispatch(addMemo(res))
            )
    }
}

export const deleteMemo = (id) => {
    return (dispatch) => {
        apiDeleteMemo(id)
            .then(
                dispatch(removeMemo(id))
            )
    }
}

export const fetchCategories = () => {
    return (dispatch) => {
        apiFetchCategories()
            .then(categories => {
                const categoriesForState = {};
                categories.forEach(c => categoriesForState[c.id] = c)

                dispatch(loadCategories(categoriesForState))
            })
    }
}

export const addNote = ({memoID, noteValue}) => {
    return (dispatch, getState) => {
        const memo = getState().memo.memos[memoID];
        const notes = memo.notes;
        const noteID = Object.keys(notes).length;
        const note = { id: noteID, desc: noteValue };
        const memoForPost = { ...memo, notes: [ ...notes, note ] }
        apiUpdateMemo(memoID, memoForPost)
            .then(res =>
                dispatch(updateMemo(memo.id, res))
            )
    }
}

export const deleteNote = ({memoID, noteID}) => {
    return (dispatch, getState) => {
        const memo = getState().memo.memos[memoID];
        const notes = memo.notes.filter(note => note.id !== noteID);
        const memoForPost = { ...memo, notes: notes }
        apiUpdateMemo(memoID, memoForPost)
            .then(res =>
                dispatch(updateMemo(memo.id, res))
            )
    }
}

// REDUCER

export default (state = initialState, action) => {

    switch (action.type) {

        case MEMOS_LOAD:
            return { ...state, memos: action.payload }

        case MEMO_ADD:
            return { ...state, memos: { ...state.memos, [action.payload.id]: action.payload } }

        case MEMO_REMOVE:
            return {
                ...state,
                memos: {
                    ...Object.keys(state.memos).reduce((acc, i) => {
                        if (state.memos[i].id !== action.payload.id) {
                            acc[i] = state.memos[i]
                        }
                        return acc;
                    }, [])
                }
            }

        case MEMO_APPLYFILTER:
            return { ...state, categoryFilter: action.payload.val }

        case MEMO_UPDATE:
            return { ...state, memos: { ...state.memos, [action.payload.memoID]: action.payload.memo } }

        case CATEGORIES_LOAD:
            return { ...state, categories: action.payload.categories }

        default:
            return state

    }

}
