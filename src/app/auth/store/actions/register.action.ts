import { createAction, props } from '@ngrx/store';

import { ActionTypesEnum } from '../action-types.enum';
import { RegisterRequest } from '../../types/register-request.interface';
import { CurrentUser } from '../../../shared/types/current-user.interface';
import { BackendError } from '../../../shared/types/backend-error.interface';

export const registerAction = createAction(
  ActionTypesEnum.REGISTER,
  props<RegisterRequest>()
);

export const registerSuccessAction = createAction(
  ActionTypesEnum.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUser }>()
);

export const registerFailureAction = createAction(
  ActionTypesEnum.REGISTER_FAILURE,
  props<{ errors: BackendError }>()
);
