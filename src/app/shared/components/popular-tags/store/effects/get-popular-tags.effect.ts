import { Injectable } from '@angular/core';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PopularTagsService } from '../../services/popular-tags.service';
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction
} from '../actions/get-popular-tags.action';

import { PopularTagType } from '../../../../types/popular-tag-type.type';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class GetPopularTagsEffect {

  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService,
  ) {
  }

  popularTags$ = createEffect(() => this.actions$.pipe(
    ofType(getPopularTagsAction),
    switchMap(() => {
      return this.popularTagsService.getPopularTags().pipe(
        map((popularTags: PopularTagType[]) => getPopularTagsSuccessAction({ popularTags })),
        catchError(() => of(getPopularTagsFailureAction())),
      );
    })
  ));
}
