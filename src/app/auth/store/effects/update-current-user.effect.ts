import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction
} from '../actions/uodate-current-user.action';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import { AuthService } from '../../services/auth.service';

import { CurrentUser } from '../../../shared/types/current-user.interface';
import { PATH } from 'src/app/shared/constants/path.constant';

@Injectable()
export class UpdateCurrentUserEffect {

  path: typeof PATH = PATH;

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {
  }

  updateCurrentUser$ = createEffect(() => this.actions$.pipe(
    ofType(updateCurrentUserAction),
    switchMap(({ currentUserInput }) => {
      return this.authService.updateCurrentUser(currentUserInput)
        .pipe(
          map((currentUser: CurrentUser) => {
            return updateCurrentUserSuccessAction({ currentUser });
          }),
          catchError((errResponse: HttpErrorResponse) => {
            return of(updateCurrentUserFailureAction({ errors: errResponse.error.errors }));
          }),
        )
    })
  ));

}
