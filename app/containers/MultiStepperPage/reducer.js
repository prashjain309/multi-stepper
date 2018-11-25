/* eslint-disable no-case-declarations */
/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { GET_CONFIG_SUCCESS, SET_ACTIVE_SELECTION } from './constants';
import {
  getMasterLevelConfig,
  handlActiveSlection,
  getFromActiveList
} from './helpers';

// The initial state of the App
const initialState = {
  config: {},
  active: {},
  levelConfigs: []
};

function multiStepperReducer(state = initialState, action) {
  switch (action.type) {
    // eslint-disable-next-line no-case-declarations
    case GET_CONFIG_SUCCESS:
      return {
        ...state,
        config: action.payload,
        active: handlActiveSlection(action.payload),
        levelConfigs: getMasterLevelConfig(action.payload)
      };

    case SET_ACTIVE_SELECTION:
      const { code = '', innerText } = action.payload || {};
      const { config = [] } = state;
      const newLevel = code.split('-').reduce(
        (acc, cur) => {
          if (acc.config[cur].subSteps) {
            return {
              config: acc.config[cur].subSteps,
              active:
                acc.active.length > 0
                  ? [...acc.active, acc.config[cur].title]
                  : [acc.config[cur].title],
              activeCodeMap:
                acc.activeCodeMap.length > 0
                  ? [...acc.activeCodeMap, parseInt(cur, 10)]
                  : [parseInt(cur, 10)]
            };
          }
          return {
            config: [],
            active:
              acc.active.length > 0
                ? [...acc.active, acc.config[cur].title]
                : [acc.config[cur].title],
            activeCodeMap:
              acc.activeCodeMap.length > 0
                ? [...acc.activeCodeMap, parseInt(cur, 10)]
                : [parseInt(cur, 10)]
          };
        },
        { active: [], activeCodeMap: [], config }
      );

      const newDefaults = handlActiveSlection(newLevel.config);
      const newList = [...newLevel.active, ...newDefaults.list];
      const codeMap = [...newLevel.activeCodeMap, ...newDefaults.codeMap];
      return {
        ...state,
        active: {
          list: newList,
          codeMap,
          content:
            newDefaults.content || getFromActiveList(config, newList, 'content')
        }
      };

    default:
      return state;
  }
}

export default multiStepperReducer;
