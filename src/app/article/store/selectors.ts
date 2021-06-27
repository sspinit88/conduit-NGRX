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
//
export const isSubmittingCreateArticleSelector = createSelector(
  articleFeaturesSelector,
  (state: ArticleState) => state.isSubmitting,
);

export const errorsOfCreateArticleSelector = createSelector(
  articleFeaturesSelector,
  (state: ArticleState) => state.validationErrors,
);
//
export const isSubmittingUpdateArticleSelector = createSelector(
  articleFeaturesSelector,
  (state: ArticleState) => state.isSubmitting,
);

export const errorOfUpdateArticleSelector = createSelector(
  articleFeaturesSelector,
  (state: ArticleState) => state.validationErrors,
);
//
