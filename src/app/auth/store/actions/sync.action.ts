import { createAction } from '@ngrx/store';
import { ActionTypesEnum } from '../action-types.enum';

// TODO в этом файле все синхронные экшены

export const logoutAction = createAction(
  ActionTypesEnum.LOGOUT,
);
