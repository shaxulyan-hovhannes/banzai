import { handleActions } from 'redux-actions';
import { produce } from 'immer';
import { TOGGLE_MODAL } from './actions';

const initialState = {
  isModalOpen: false,
};

const modalReducers = handleActions(
  {
    [TOGGLE_MODAL]: (state) =>
      produce(state, (draft) => {
        draft.isModalOpen = !draft.isModalOpen;
      }),
  },
  initialState
);

export default modalReducers;
