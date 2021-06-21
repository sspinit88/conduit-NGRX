import { createAction, props } from '@ngrx/store';

import { ActionTypesEnum } from '../action-types.enum';

import { CurrentUser } from '../../../shared/types/current-user.interface';

export const getCurrentUserAction = createAction(
  ActionTypesEnum.GET_CURRENT_USER,
  // TODO props отсутствует, так как в get-запросе ничего не передаем
);

export const getCurrentUserSuccessAction = createAction(
  ActionTypesEnum.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUser }>()
);

export const getCurrentUserFailureAction = createAction(
  ActionTypesEnum.GET_CURRENT_USER_FAILURE,
  // TODO props отсутствует, так как, если и прийдет ошибка, то 401
);
