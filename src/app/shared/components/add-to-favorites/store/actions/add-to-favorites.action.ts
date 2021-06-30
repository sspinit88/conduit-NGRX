import { createAction, props } from '@ngrx/store';

import { ActionTypesEnum } from '../action-types.enum';

import { Article } from '../../../../types/article.interface';

export const addToFavoritesAction = createAction(
  ActionTypesEnum.ADD_TO_FAVORITES,
  props<{ isFavorited: boolean, slug: string }>(),
);

export const addToFavoritesSuccessAction = createAction(
  ActionTypesEnum.ADD_TO_FAVORITES_SUCCESS,
  props<{ article: Article }>(),
);

export const addToFavoritesFailureAction = createAction(
  ActionTypesEnum.ADD_TO_FAVORITES_FAILURE,
);
