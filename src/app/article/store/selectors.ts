import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticleState } from '../types/article-state.interface';

export const articleFeaturesSelector = createFeatureSelector<ArticleState>('article');

export const isLoadingSelector = createSelector(
  articleFeaturesSelector,
  (state: ArticleState) => state.isLoading,
);

export const articleSelector = createSelector(
  articleFeaturesSelector,
  (state: ArticleState) => state.data,
);

export const errorSelector = createSelector(
  articleFeaturesSelector,
  (state: ArticleState) => state.error,
);
