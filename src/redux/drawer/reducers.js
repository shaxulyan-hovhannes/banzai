import { handleActions } from 'redux-actions';
import { produce } from 'immer';
import { TOGGLE_DRAWER } from './actions';

const initialState = {
  isDrawerOpen: false,
};

const drawerReducers = handleActions(
  {
    [TOGGLE_DRAWER]: (state) =>
      produce(state, (draft) => {
        draft.isDrawerOpen = !draft.isDrawerOpen;
      }),
  },
  initialState
);

export default drawerReducers;
