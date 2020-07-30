import * as ActionTypes from '../actions/types';

const defaultState = {
    loading: false
};

const loadingReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.SHOW_LOADING:
            return {
                ...state,
                loading: true
            };
        case ActionTypes.HIDE_LOADING:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};

export default loadingReducer;