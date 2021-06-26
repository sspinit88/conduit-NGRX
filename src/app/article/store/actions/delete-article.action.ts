import { createAction, props } from '@ngrx/store';
import { ActionTypesEnum } from '../action-types.enum';

export const deleteArticleAction = createAction(
  ActionTypesEnum.DELETE_ARTICLE,
  props<{ slug: string }>()
);

export const deleteArticleSuccessAction = createAction(
  ActionTypesEnum.DELETE_ARTICLE_SUCCESS
);

export const deleteArticleFailureAction = createAction(
  ActionTypesEnum.DELETE_ARTICLE_FAILURE
);

