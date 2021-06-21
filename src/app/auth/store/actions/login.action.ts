import { createAction, props } from '@ngrx/store';

import { ActionTypesEnum } from '../action-types.enum';

import { LoginRequest } from '../../types/login.interface';
import { CurrentUser } from '../../../shared/types/current-user.interface';
import { BackendError } from '../../../shared/types/backend-error.interface';

export const loginAction = createAction(
  ActionTypesEnum.LOGIN,
  props<LoginRequest>()
);

export const loginSuccessAction = createAction(
  ActionTypesEnum.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUser }>()
);

export const loginFailureAction = createAction(
  ActionTypesEnum.LOGIN_FAILURE,
  props<{ errors: BackendError }>()
);
