import { Action, createReducer, on } from '@ngrx/store';

import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from './actions/get-feed.action';

import { FeedState } from '../types/feed-state.interface';
import { routerNavigatedAction } from '@ngrx/router-store';


const initialState: FeedState = {
  isLoading: false,
  error: null,
  data: null
};

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): FeedState => ({
      isLoading: false,
      data: action.feed,
      error: null,
    })
  ),
  on(
    getFeedFailureAction,
    (state): FeedState => ({
      ...state,
      isLoading: false,
    })
  ),
  // TODO пример применения ngrx router
  on(
    routerNavigatedAction,
    (): FeedState => ({
      ...initialState,
      isLoading: true
    })
  ),
);

export function reducers(state: FeedState, action: Action) {
  return feedReducer(state, action);
}
