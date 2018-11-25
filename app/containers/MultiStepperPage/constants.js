/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

// export const FETCH_OPTION_SUCCESS = 'boilerplate/MultiStepperApp/FETCH_OPTION_SUCCESS';

export const GET_CONFIG = 'boilerplate/MultiStepperApp/GET_CONFIG';
export const GET_CONFIG_SUCCESS = 'boilerplate/MultiStepperApp/GET_CONFIG_SUCCESS';
export const GET_CONFIG_ERROR = 'boilerplate/MultiStepperApp/GET_CONFIG_ERROR';

export const SET_ACTIVE_SELECTION = 'boilerplate/MultiStepperApp/SET_ACTIVE_SELECTION';
