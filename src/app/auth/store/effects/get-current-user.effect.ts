import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction
} from '../actions/get-current-user.action';

import { AuthService } from '../../services/auth.service';
import { PersistenceService } from '../../../shared/services/persistence.service';

import { CurrentUser } from '../../../shared/types/current-user.interface';

@Injectable()
export class GetCurrentUserEffect {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService,
  ) {
  }

  getCurrentUser$ = createEffect(() => this.actions$.pipe(
    ofType(getCurrentUserAction),
    switchMap(() => {
      return this.authService.getCurrentUser().pipe(
        map((currentUser: CurrentUser) => {
          const token = this.persistenceService.get('token');

          if (!token) {
            return getCurrentUserFailureAction();
          }

          return getCurrentUserSuccessAction({ currentUser });
        }),
        catchError((errResponse: HttpErrorResponse) => {
          return of(getCurrentUserFailureAction());
        }),
      )
    })
  ));

}
