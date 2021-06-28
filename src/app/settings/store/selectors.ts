import { createFeatureSelector, createSelector } from '@ngrx/store';

import { SettingsState } from '../types/settings-state.interface';

export const settingsFeatureSelector = createFeatureSelector<SettingsState>('settings');

export const isSubmittingSelector = createSelector(
  settingsFeatureSelector,
  (state: SettingsState) => state.isSubmitting,
);

export const validationErrorsSelector = createSelector(
  settingsFeatureSelector,
  (state: SettingsState) => state.validationError,
);
