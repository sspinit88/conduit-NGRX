import { createAction, props } from '@ngrx/store';

import { ActionTypesEnum } from '../action-types';

import { PopularTagType } from '../../../../types/popular-tag-type.type';

export const getPopularTagsAction = createAction(
  ActionTypesEnum.GET_POPULAR_TAGS,
);

export const getPopularTagsSuccessAction = createAction(
  ActionTypesEnum.GET_POPULAR_TAGS_SUCCESS,
  props<{ popularTags: PopularTagType[] }>(),
);

export const getPopularTagsFailureAction = createAction(
  ActionTypesEnum.GET_POPULAR_TAGS_FAILURE,
);
