import { handleActions } from 'redux-actions';
import { produce } from 'immer';
import {
  FETCH_CONTENT,
  FETCH_CONTENT_SUCCESS,
  FETCH_CONTENT_ERROR,
  FETCH_CONTENT_RESET,
} from './actions';

const initialState = {
  contents: [],
  loading: false,
  error: null,
};

const contentReducers = handleActions(
  {
    [FETCH_CONTENT]: (state) =>
      produce(state, (draft) => {
        draft.loading = true;
      }),

    [FETCH_CONTENT_SUCCESS]: (state, { payload: contents }) =>
      produce(state, (draft) => {
        draft.contents = contents;
      }),

    [FETCH_CONTENT_ERROR]: (state, { payload: error }) =>
      produce(state, (draft) => {
        draft.error = error;
      }),
    [FETCH_CONTENT_RESET]: (state) =>
      produce(state, (draft) => {
        draft.loading = false;
      }),
  },
  initialState
);

export default contentReducers;
