import { all } from 'redux-saga/effects';
import companyLogo from 'redux/logo/saga';

export default function* rootSaga() {
  yield all([companyLogo()]);
}
