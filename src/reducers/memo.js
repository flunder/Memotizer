import { apiFetchMemos } from '../lib/memoSevices'

const initialState = {
    memos: []
}

// ACTION-NAMES

const MEMOS_LOAD = 'MEMOS_LOAD'

// ACTIONS

const loadMemos = (memos) => (
    { type: MEMOS_LOAD, payload: memos }
)

// ASYNC ACTIONS

export const fetchMemos = () => {
    return (dispatch) => {
        apiFetchMemos()
            .then(memos =>
                dispatch(loadMemos(memos))
            )
    }
}

// REDUCER

export default (state = initialState, action) => {

    switch (action.type) {

        case MEMOS_LOAD:
            return { ...state, memos: action.payload }

        default:
            return state

    }

}
