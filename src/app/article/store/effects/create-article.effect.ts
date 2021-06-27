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


@Injectable()
export class CreateArticleEffect {

  constructor(
    private router: Router,
    private actions$: Actions,
    private createArticleService: CreateArticleService
  ) {
  }

  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleAction),
      switchMap(({ articleInput }) => {
        return this.createArticleService.create(articleInput)
          .pipe(
            map((article: Article) => {
              return createArticleSuccessAction({ article });
            }),
            catchError((errorResponse: HttpErrorResponse) => {
              return of(
                createArticleFailureAction({ errors: errorResponse.error.errors })
              )
            }),
          );
      })
    )
  );

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap(({ article }) => {
          this.router.navigate(['/article', article.slug]);
        }),
      ),
    { dispatch: false },
  );

}
