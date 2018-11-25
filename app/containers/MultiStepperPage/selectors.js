/**
 * MultiStepper selectors
 */

import { createSelector } from 'reselect';

const multiStepperApp = (state) => state.get('multiStepperApp');

const config = () =>
  createSelector(
    multiStepperApp,
    (multiStepperState) => multiStepperState.config
  );

const getActiveContent = () =>
  createSelector(
    multiStepperApp,
    (multiStepperState) => multiStepperState.active
  );

export { multiStepperApp, config, getActiveContent };
