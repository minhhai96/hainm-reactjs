import * as ActionTypes from '../actions/types';
import {put, call, takeLatest} from 'redux-saga/effects';
import {hideLoading, showLoading} from "../actions";
import {GET_LIST_COIN} from "../constants/endpoint";

function * GET_COIN(action) {
    yield put(showLoading());
    try {
        const response = yield call(GET_LIST_COIN);
        console.log('response', response);
        yield put ({type: ActionTypes.GET_COIN_SUCCESS, listCoin: response});
        yield put(hideLoading());
    } catch (e) {
        console.log('error', e);
        yield put (hideLoading());
    }
}

function * listCoinSagas() {
    yield takeLatest(ActionTypes.GET_COIN, GET_COIN);
}

export default listCoinSagas;
