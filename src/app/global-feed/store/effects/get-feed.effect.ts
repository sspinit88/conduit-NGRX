import { Injectable } from '@angular/core';

import { FeedService } from '../../services/feed.service';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from '../actions/get-feed.action';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import { FeedResponse } from '../../types/feed-response.interface';

@Injectable()
export class GetFeedEffect {
  constructor(
    private actions$: Actions,
    private feedService: FeedService,
  ) {
  }

  getFeed$ = createEffect(() => this.actions$.pipe(
    ofType(getFeedAction),
    switchMap(({ url }) => {
      return this.feedService.getFeed(url)
        .pipe(
          map((feed: FeedResponse) => {
            return getFeedSuccessAction({ feed });
          }),
          catchError((err) => {
            return of(getFeedFailureAction());
          }),
        );
    })
  ));

}
