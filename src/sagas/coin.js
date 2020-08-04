import * as ActionTypes from '../actions/types';
import {put, call, takeLatest} from 'redux-saga/effects';
import {hideLoading, showLoading} from "../actions";
import {callApi} from "../helpers/callApi";

function* GET_COIN() {
    yield put(showLoading());
    try {
        const response = yield call(
            callApi,
            {},
            {
                endpoint: 'v1/cryptocurrency/listings/latest?start=1&limit=10',
                method: 'GET',
            }
        );
        console.log('response', response);
        yield put({type: ActionTypes.GET_COIN_SUCCESS, listCoin: response});
        yield put(hideLoading());
    } catch (e) {
        console.log('error', e);
        yield put(hideLoading());
    }
}

function* listCoinSagas() {
    yield takeLatest(ActionTypes.GET_COIN, GET_COIN);
}

export default listCoinSagas;
