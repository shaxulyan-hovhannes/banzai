import { put, call, takeEvery, all } from 'redux-saga/effects';
import {
  FETCH_COMPANY_LOGO,
  FETCH_COMPANY_LOGO_SUCCESS,
  FETCH_COMPANY_LOGO_ERROR,
  FETCH_COMPANY_LOGO_RESET,
} from 'redux/logo/actions';
import { fetchAPI } from 'components/helpers';

function* workFetchCompanyLogo() {
  try {
    const response = yield call(fetchAPI, {
      url: '/content-app-cats/jVV3Q?appId=2731&eventId=2570',
      method: 'get',
    });

    if (response && response.data) {
      yield put({
        type: FETCH_COMPANY_LOGO_SUCCESS,
        payload: response.data,
      });
    }
  } catch (e) {
    yield put({
      type: FETCH_COMPANY_LOGO_ERROR,
      payload: e,
    });
  } finally {
    yield put({
      type: FETCH_COMPANY_LOGO_RESET,
    });
  }
}

function* watchForFetchCompanyLogo() {
  yield takeEvery(FETCH_COMPANY_LOGO, workFetchCompanyLogo);
}

export default function* allWatchers() {
  yield all([watchForFetchCompanyLogo()]);
}
