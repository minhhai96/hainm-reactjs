import * as ActionTypes from '../actions/types';

export const showLoading = () => {
    return { type: ActionTypes.SHOW_LOADING }
};

export const hideLoading = () => {
    return { type: ActionTypes.HIDE_LOADING }
};

export const getCoin = () => {
    return { type : ActionTypes.GET_COIN }
};
