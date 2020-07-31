import { all } from 'redux-saga/effects'
import listCoinSagas from "../sagas/coin";

export default function *rootSaga() {
    yield all([
        listCoinSagas()
    ])
}
