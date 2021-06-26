import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import { ArticleService as SharedArticleService } from '../../../shared/services/article.service';

import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from '../actions/get-article.action';

import { Article } from '../../../shared/types/article.interface';


@Injectable()
export class GetArticleEffect {
  constructor(
    private actions$: Actions,
    private articleServices: SharedArticleService,
  ) {
  }

  getArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.articleServices.getArticle(slug)
          .pipe(
            map((article: Article) => {
              return getArticleSuccessAction({ article })
            }),
            catchError(() => {
              return of(getArticleFailureAction());
            })
          );
      })
    );
  });

}
