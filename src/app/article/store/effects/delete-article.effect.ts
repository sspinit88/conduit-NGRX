import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import { ArticleService } from '../../services/article.service';

import {
  deleteArticleAction,
  deleteArticleFailureAction,
  deleteArticleSuccessAction
} from '../actions/delete-article.action';


@Injectable()
export class DeleteArticleEffect {
  constructor(
    private actions$: Actions,
    private articleServices: ArticleService,
    private router: Router,
  ) {
  }

  deleteArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteArticleAction),
      switchMap(({ slug }) => {
        return this.articleServices.delete(slug)
          .pipe(
            map(() => {
              return deleteArticleSuccessAction();
            }),
            catchError(() => {
              return of(deleteArticleFailureAction());
            })
          );
      })
    );
  });

  // TODO реализуем редирект при успешном ответе
  redirectAfterDelete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticleSuccessAction),
      tap(() => this.router.navigate(['/'])),
    ), { dispatch: false });

}
