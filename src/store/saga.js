import { all, call, put, takeEvery } from 'redux-saga/effects';

import Api from '../lib/api';

import { updateAllItems } from '../actions/items-actions';

export default function* rootSaga() {
  yield all([fetchItemsFromApi()]);
}

export function* fetchItemsFromApi() {
  yield takeEvery('FETCH_ITEMS', makeApiRequest);
}

export function* makeApiRequest() {
  const items = yield call(Api.getAll);
  yield put(updateAllItems(items));
}
