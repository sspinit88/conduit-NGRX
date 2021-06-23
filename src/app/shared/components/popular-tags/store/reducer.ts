import { PopularTagsState } from '../types/popular-tags-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction
} from './actions/get-popular-tags.action';

const initialState: PopularTagsState = {
  isLoading: false,
  data: null,
  error: null,
}

const popularTagsReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state): PopularTagsState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getPopularTagsSuccessAction,
    (state, action): PopularTagsState => ({
      ...state,
      isLoading: false,
      data: action.popularTags,
      error: null,
    })
  ),
  on(
    getPopularTagsFailureAction,
    (state): PopularTagsState => ({
      ...state,
      isLoading: false,
    })
  ),
);

export function reducers(state: PopularTagsState, action: Action) {
  return popularTagsReducer(state, action);
}
