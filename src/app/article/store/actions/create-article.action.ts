import { createAction, props } from '@ngrx/store';

import { ActionTypesEnum } from '../action-types.enum';

import { ArticleInput } from '../../types/article-input.interface';
import { Article } from 'src/app/shared/types/article.interface';
import { BackendError } from '../../../shared/types/backend-error.interface';

export const createArticleAction = createAction(
  ActionTypesEnum.CREATE_ARTICLE,
  props<{ articleInput: ArticleInput }>()
);

export const createArticleSuccessAction = createAction(
  ActionTypesEnum.CREATE_ARTICLE_SUCCESS,
  props<{ article: Article }>()
);

export const createArticleFailureAction = createAction(
  ActionTypesEnum.CREATE_ARTICLE_FAILURE,
  props<{ errors: BackendError }>()
);
