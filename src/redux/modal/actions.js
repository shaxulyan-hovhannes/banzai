import { createActions } from 'redux-actions';

const TOGGLE_MODAL = 'TOGGLE_MODAL';

const modalActions = createActions(TOGGLE_MODAL);

export default modalActions;

export { TOGGLE_MODAL };
