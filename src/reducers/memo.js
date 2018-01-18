import { apiFetchMemos, apiCreateMemo } from '../lib/memoSevices'

const initialState = {
    memos: {},
    create: {
        title: '',
        url: '',
        notes: {}
    }
}

// ACTION-NAMES

const MEMOS_LOAD = 'MEMOS_LOAD'
const MEMO_ADD = 'MEMO_ADD'

const CURRENT_TITLE_UPDATE = 'CURRENT_TITLE_UPDATE'
const CURRENT_URL_UPDATE = 'CURRENT_URL_UPDATE'

const NOTE_ADD = 'NOTE_ADD'

// ACTIONS

const loadMemos = (memos) => (
    { type: MEMOS_LOAD, payload: memos }
)

const addMemo = (memo) => (
    { type: MEMO_ADD, payload: memo }
)

export const addNote = (memoID, newNoteID) => (
    { type: NOTE_ADD, payload: { memoID, newNoteID } }
)

export const updateCurrentTitle = (val) => (
    { type: CURRENT_TITLE_UPDATE, payload: val }
)

export const updateCurrentUrl = (val) => (
    { type: CURRENT_URL_UPDATE, payload: val }
)

// ASYNC ACTIONS

export const fetchMemos = () => {
    return (dispatch) => {
        apiFetchMemos()
            .then(memos => {
                let memosForState = {}
                memos.forEach(memo => { memosForState[memo.id] = memo })
                dispatch(loadMemos(memosForState))
            })
    }
}

export const createMemo = () => {
    return (dispatch, getState) => {
        const memo = getState().memo.create
        apiCreateMemo(memo)
            .then(res =>
                dispatch(addMemo(res))
            )
    }
}

// REDUCER

export default (state = initialState, action) => {

    switch (action.type) {

        case MEMOS_LOAD:
            return { ...state, memos: action.payload }

        case MEMO_ADD:
            return {
                ...state,
                create: { title: '', url: '' },
                memos: {
                    ...state.memos,
                    [action.payload.id]: action.payload
                }
            }

        case NOTE_ADD:
            return {
                ...state,
                memos: {
                    ...state.memos,
                    [action.payload.memoID]: {
                        ...state.memos[action.payload.memoID],
                        notes: {
                            ...state.memos[action.payload.memoID].notes,
                            [action.payload.newNoteID]: {
                                desc: 'test'
                            }
                        }
                    }

                }
            }

        case CURRENT_TITLE_UPDATE:
            return { ...state, create: { ...state.create, title: action.payload } }

        case CURRENT_URL_UPDATE:
            return { ...state, create: { ...state.create, url: action.payload } }

        default:
            return state

    }

}
