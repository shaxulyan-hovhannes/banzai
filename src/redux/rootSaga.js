import { all } from 'redux-saga/effects';

import companyLogo from 'redux/logo/saga';
import content from 'redux/content/saga';

export default function* rootSaga() {
  yield all([companyLogo(), content()]);
}
