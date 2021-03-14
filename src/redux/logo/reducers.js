import { produce } from 'immer';
import { handleActions } from 'redux-actions';
import {
  FETCH_COMPANY_LOGO,
  FETCH_COMPANY_LOGO_SUCCESS,
  FETCH_COMPANY_LOGO_ERROR,
  FETCH_COMPANY_LOGO_RESET,
} from './actions';

const initialState = {
  selectedCategory: 0,
  loading: false,
  error: null,
  source: '',
  title: '',
  cats: [],
};

const companyLogoReducers = handleActions(
  {
    [FETCH_COMPANY_LOGO]: (state) =>
      produce(state, (draft) => {
        draft.loading = true;
      }),

    [FETCH_COMPANY_LOGO_SUCCESS]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.source = payload.header_logo;
        draft.title = payload.title;
        draft.cats = payload.cats;
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
