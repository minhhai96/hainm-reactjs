import * as ActionTypes from '../actions/types';

const defaultState = {
    listCoin: []
};

const coinReducer = (state = defaultState, action ) => {
    switch (action.type) {
        case ActionTypes.GET_COIN_SUCCESS:
            return {
                ...state,
                listCoin: action.listCoin
            };
        default:
            return state;
    }
};

export default coinReducer;
