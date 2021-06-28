import { Action, createReducer, on } from '@ngrx/store';

import { AuthState } from '../types/auth-state.interface';
import { registerAction, registerFailureAction, registerSuccessAction } from './actions/register.action';
import { loginAction, loginFailureAction, loginSuccessAction } from './actions/login.action';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction
} from './actions/get-current-user.action';
import { updateCurrentUserSuccessAction } from './actions/uodate-current-user.action';

const initialState: AuthState = {
  isSubmitting: false,
  isLoading: false,
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
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthState => ({
      isSubmitting: false,
      isLoginIn: true,
      currentUser: action.currentUser,
      validationErrors: null,
      isLoading: false,
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),
  on(
    loginAction,
    (state): AuthState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    loginSuccessAction,
    (state, action): AuthState => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
      isLoginIn: true,
    })
  ),
  on(
    loginFailureAction,
    (state, action): AuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),
  on(
    getCurrentUserAction,
    (state): AuthState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCurrentUserSuccessAction,
    (state, action): AuthState => ({
      ...state,
      isLoading: false,
      isLoginIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    getCurrentUserFailureAction,
    (state): AuthState => ({
      ...state,
      isLoading: false,
      isLoginIn: false,
      currentUser: null,
    })
  ),
  on(
    updateCurrentUserSuccessAction,
    (state, action): AuthState => ({
      ...state,
      currentUser: action.currentUser,
    })
  ),
  on(
    // TODO logout
    loginAction,
    (state): AuthState => ({
      ...state,
      ...initialState,
      isLoginIn: false,
    })
  ),
);

export function reducers(state: AuthState, action: Action) {
  return authReducer(state, action);
}
