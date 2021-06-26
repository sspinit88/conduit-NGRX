import { createAction, props } from '@ngrx/store';
import { ActionTypesEnum } from '../action-types.enum';
import { Article } from '../../../shared/types/article.interface';

export const getArticleAction = createAction(
  ActionTypesEnum.GET_ARTICLE,
  props<{ slug: string }>()
);

export const getArticleSuccessAction = createAction(
  ActionTypesEnum.GET_ARTICLE_SUCCESS,
  props<{ article: Article }>()
);

export const getArticleFailureAction = createAction(
  ActionTypesEnum.GET_ARTICLE_FAILURE,
);
