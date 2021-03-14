import { createAction } from 'redux-actions';

const TOGGLE_DRAWER = 'TOGGLE_DRAWER';

const toggleDrawer = createAction(TOGGLE_DRAWER);

export default toggleDrawer;

export { TOGGLE_DRAWER };
