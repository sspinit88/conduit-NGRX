import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { of } from 'rxjs/internal/observable/of';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { CreateArticleService } from '../../services/create-article.service';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction
} from '../actions/create-article.action';

import { Article } from 'src/app/shared/types/article.interface';
import { EditArticleService } from '../../services/edit-article.service';
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction
} from '../actions/update-article.action';


@Injectable()
export class UpdateArticleEffect {

  constructor(
    private router: Router,
    private actions$: Actions,
    private updateArticleService: EditArticleService
  ) {
  }

  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({ slug, articleInput }) => {
        return this.updateArticleService.updateArticle(slug, articleInput)
          .pipe(
            map((article: Article) => {
              return updateArticleSuccessAction({ article });
            }),
            catchError((errorResponse: HttpErrorResponse) => {
              return of(
                updateArticleFailureAction({ errors: errorResponse.error.errors })
              )
            }),
          );
      })
    )
  );

  redirectAfterUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateArticleSuccessAction),
        tap(({ article }) => {
          this.router.navigate(['/article', article.slug]);
        }),
      ),
    { dispatch: false },
  );

}
