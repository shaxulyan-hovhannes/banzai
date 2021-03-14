import { createActions } from 'redux-actions';

const FETCH_CONTENT = 'FETCH_CONTENT';
const FETCH_CONTENT_SUCCESS = 'FETCH_CONTENT_SUCCESS';
const FETCH_CONTENT_ERROR = 'FETCH_CONTENT_ERROR';
const FETCH_CONTENT_RESET = 'FETCH_CONTENT_RESET';

const contentActions = createActions(
  FETCH_CONTENT,
  FETCH_CONTENT_SUCCESS,
  FETCH_CONTENT_ERROR,
  FETCH_CONTENT_RESET
);

export default contentActions;

export { FETCH_CONTENT, FETCH_CONTENT_SUCCESS, FETCH_CONTENT_ERROR, FETCH_CONTENT_RESET };
