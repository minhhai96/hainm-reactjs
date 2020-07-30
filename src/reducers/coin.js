import * as ActionTypes from '../actions/types';

const defaultState = {
    listCoin: []
};

const coinReducer = (state = defaultState, action ) => {
    switch (action.type) {
        case ActionTypes.GET_COIN_PENDING:
            return {
                ...state
            };
        case ActionTypes.GET_COIN_SUCCESS:
            return {
                ...state,
                listCoin: action.listCoin
            };
        case ActionTypes.GET_COIN_ERROR:
            return {
                ...state,
                listCoin: []
            };
        default:
            return state;
    }
};

export default coinReducer;