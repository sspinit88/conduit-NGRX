import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs/internal/observable/of';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/operators';
import { switchMap } from 'rxjs/internal/operators/switchMap';

import { AddToFavoritesService } from '../../services/add-to-favorites.service';

import {
  addToFavoritesAction,
  addToFavoritesFailureAction,
  addToFavoritesSuccessAction
} from '../actions/add-to-favorites.action';

import { Article } from '../../../../types/article.interface';

@Injectable()
export class AddToFavoritesEffect {
  constructor(
    private actions$: Actions,
    private addToFavoritesService: AddToFavoritesService,
  ) {
  }

  addToFavorites$ = createEffect(() => this.actions$.pipe(
    ofType(addToFavoritesAction),
    switchMap(({ isFavorited, slug }) => {
      // TODO проверяем метод, который будем вызывать
      // TODO reducer и selectors не создаем, потому что не будем сохранять никакие данные
      const article$ = isFavorited ? this.addToFavoritesService.removeFormFavorites(slug)
        : this.addToFavoritesService.addToFavorites(slug);

      return article$
        .pipe(
          map((article: Article) => {
            return addToFavoritesSuccessAction({ article });
          }),
          catchError(() => {
            return of(addToFavoritesFailureAction());
          }),
        );
    })
  ));

}
