/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  GET_CONFIG,
  GET_CONFIG_SUCCESS,
  GET_CONFIG_ERROR,
  SET_ACTIVE_SELECTION
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function getConfig() {
  return {
    type: GET_CONFIG
  };
}

export function getConfigSuccess(payload) {
  return {
    type: GET_CONFIG_SUCCESS,
    payload
  };
}

export function getConfigError(err) {
  return {
    type: GET_CONFIG_ERROR,
    err
  };
}

export function setSelection(payload) {
  return {
    type: SET_ACTIVE_SELECTION,
    payload
  };
}
