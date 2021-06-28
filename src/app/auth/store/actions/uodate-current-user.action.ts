import { createAction, props } from '@ngrx/store';
import { ActionTypesEnum } from '../action-types.enum';

import { CurrentUserInput } from '../../../shared/types/current-user-input.interface';
import { CurrentUser } from '../../../shared/types/current-user.interface';
import { BackendError } from '../../../shared/types/backend-error.interface';

export const updateCurrentUserAction = createAction(
  ActionTypesEnum.UPDATE_CURRENT_USER,
  props<{ currentUserInput: CurrentUserInput }>(),
);

export const updateCurrentUserSuccessAction = createAction(
  ActionTypesEnum.UPDATE_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUser }>(),
);

export const updateCurrentUserFailureAction = createAction(
  ActionTypesEnum.UPDATE_CURRENT_USER_FAILURE,
  props<{ errors: BackendError }>(),
);
