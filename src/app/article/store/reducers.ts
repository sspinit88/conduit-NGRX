import { Action, createReducer, on, } from '@ngrx/store';

import { ArticleState } from '../types/article-state.interface';
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from './actions/get-article.action';
import { routerNavigatedAction } from '@ngrx/router-store';
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction
} from './actions/create-article.action';
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction
} from './actions/update-article.action';

const initialState: ArticleState = {
  isLoading: false,
  data: null,
  error: null,
  isSubmitting: false,
  validationErrors: null,
};

const articleReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state): ArticleState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): ArticleState => ({
      ...state,
      isLoading: false,
      data: action.article
    })
  ),
  on(
    getArticleFailureAction,
    (state): ArticleState => ({
      ...state,
      isLoading: false,
    })
  ),
  on(  // TODO очищаем данные
    routerNavigatedAction,
    () => initialState,
  ),
  on(
    createArticleAction,
    (state): ArticleState => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    createArticleSuccessAction,
    (state): ArticleState => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    createArticleFailureAction,
    (state, action): ArticleState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
  on(
    updateArticleAction,
    (state): ArticleState => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    updateArticleSuccessAction,
    (state, action): ArticleState => ({
      ...state,
      isSubmitting: false,
      data: action.article
    })
  ),
  on(
    updateArticleFailureAction,
    (state, action): ArticleState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
);

export function reducers(state: ArticleState, action: Action) {
  return articleReducer(state, action);
}
