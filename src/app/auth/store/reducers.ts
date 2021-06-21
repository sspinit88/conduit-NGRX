import { Action, createReducer, on } from '@ngrx/store';

import { AuthState } from '../types/auth-state.interface';
import { registerAction, registerFailureAction, registerSuccessAction } from './actions/register.action';
import { loginAction, loginFailureAction, loginSuccessAction } from './actions/login.action';

const initialState: AuthState = {
  isSubmitting: false,
  currentUser: null,
  isLoginIn: null,
  validationErrors: null,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })),
  on(
    registerSuccessAction,
    (state, action): AuthState => ({
      isSubmitting: false,
      isLoginIn: true,
      currentUser: action.currentUser,
      validationErrors: null,
    })),
  on(
    registerFailureAction,
    (state, action): AuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),
  on(
    loginAction,
    (state): AuthState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })),
  on(
    loginSuccessAction,
    (state, action): AuthState => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
      isLoginIn: true,
    })),
  on(
    loginFailureAction,
    (state, action): AuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),
);

export function reducers(state: AuthState, action: Action) {
  return authReducer(state, action);
}
