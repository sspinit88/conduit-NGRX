import { createAction, props } from '@ngrx/store';

import { ActionTypesEnum } from '../action-types.enum';

import { Article } from '../../../shared/types/article.interface';
import { ArticleInput } from '../../types/article-input.interface';
import { BackendError } from '../../../shared/types/backend-error.interface';

export const updateArticleAction = createAction(
  ActionTypesEnum.UPDATE_ARTICLE,
  props<{ slug: string, articleInput: ArticleInput }>(),
);

export const updateArticleSuccessAction = createAction(
  ActionTypesEnum.UPDATE_ARTICLE_SUCCESS,
  props<{ article: Article }>(),
);

export const updateArticleFailureAction = createAction(
  ActionTypesEnum.UPDATE_ARTICLE_FAILURE,
  props<{ errors: BackendError }>(),
);
