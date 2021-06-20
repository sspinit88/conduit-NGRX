import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from '../types/auth-state.interface';

// https://github.com/ngrx/platform/issues/2980
export const authFeatureSelector = createFeatureSelector<AuthState>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isSubmitting,
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.validationErrors,
);
