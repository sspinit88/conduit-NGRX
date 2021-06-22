import { createAction, props } from '@ngrx/store';

import { ActionTypesEnum } from '../action-types';
import { FeedResponse } from '../../types/feed-response.interface';

export const getFeedAction = createAction(
  ActionTypesEnum.GET_FEED,
  props<{ url: string }>()
);

export const getFeedSuccessAction = createAction(
  ActionTypesEnum.GET_FEED_SUCCESS,
  props<{ feed: FeedResponse }>()
);

export const getFeedFailureAction = createAction(
  ActionTypesEnum.GET_FEED_FAILURE,
);
