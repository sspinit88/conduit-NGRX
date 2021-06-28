import { Action, createReducer, on } from '@ngrx/store';
import { SettingsState } from '../types/settings-state.interface';
import {
  updateCurrentUserAction, updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction
} from '../../auth/store/actions/uodate-current-user.action';

const initialState: SettingsState = {
  isSubmitting: false,
  validationError: null,
}

// TODO тут описан редьюсер, который реагирует на экшены других модулей
const settingsReducer = createReducer(
  initialState,
  on(
    updateCurrentUserAction,
    (state): SettingsState => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    updateCurrentUserSuccessAction,
    (state): SettingsState => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    updateCurrentUserFailureAction,
    (state, action): SettingsState => ({
      ...state,
      isSubmitting: false,
      validationError: action.errors
    })
  ),
);

export function reducers(state: SettingsState, action: Action) {
  return settingsReducer(state, action)
}

