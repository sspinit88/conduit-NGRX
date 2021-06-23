import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PopularTagsState } from '../types/popular-tags-state.interface';

export const popularTagsFeatureSelector = createFeatureSelector<PopularTagsState>('popularTags');

export const popularTagsIsLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTags: PopularTagsState) => popularTags.isLoading,
);

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTags: PopularTagsState) => popularTags.data,
);

export const popularTagsErrorSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTags: PopularTagsState) => popularTags.error
);
