import { createFeatureSelector, createSelector } from '@ngrx/store';

import { FeedState } from '../../types/feed-state.interface';

export const feedFeatureSelector = createFeatureSelector<FeedState>('feed');

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedState) => feedState.isLoading,
);

export const feedDataSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedState) => feedState.data,
);

export const feedErrorSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedState) => feedState.error,
);

