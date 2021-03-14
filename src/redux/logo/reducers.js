import { produce } from 'immer';
import { handleActions } from 'redux-actions';
import {
  FETCH_COMPANY_LOGO,
  FETCH_COMPANY_LOGO_SUCCESS,
  FETCH_COMPANY_LOGO_ERROR,
  FETCH_COMPANY_LOGO_RESET,
} from './actions';

const initialState = {
  loading: false,
  error: null,
  source: '',
};

const companyLogoReducers = handleActions(
  {
    [FETCH_COMPANY_LOGO]: (state) =>
      produce(state, (draft) => {
        draft.loading = true;
      }),

    [FETCH_COMPANY_LOGO_SUCCESS]: (state, { payload: source }) =>
      produce(state, (draft) => {
        draft.source = source;
      }),

    [FETCH_COMPANY_LOGO_ERROR]: (state, { payload: error }) =>
      produce(state, (draft) => {
        draft.error = error;
      }),

    [FETCH_COMPANY_LOGO_RESET]: (state) =>
      produce(state, (draft) => {
        draft.loading = false;
      }),
  },
  initialState
);

export default companyLogoReducers;
