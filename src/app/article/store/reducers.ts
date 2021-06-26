import { Action, createReducer, on, } from '@ngrx/store';

import { ArticleState } from '../types/article-state.interface';
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from './actions/get-article.action';
import { routerNavigatedAction } from '@ngrx/router-store';

const initialState: ArticleState = {
  isLoading: false,
  data: null,
  error: null,
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
  // TODO очищаем данные
  on(
    routerNavigatedAction,
    () => initialState,
  )
);

export function reducers(state: ArticleState, action: Action) {
  return articleReducer(state, action);
}
