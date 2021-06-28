import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.action';

import { AuthService } from '../../services/auth.service';
import { PersistenceService } from '../../../shared/services/persistence.service';
import { CurrentUser } from '../../../shared/types/current-user.interface';
import { HttpErrorResponse } from '@angular/common/http';

import { PATH } from 'src/app/shared/constants/path.constant';

@Injectable()
export class LoginEffect {

  path: typeof PATH = PATH;

  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService,
    private persistenceService: PersistenceService,
  ) {
  }

  login$ = createEffect(() => this.actions$.pipe(
    ofType(loginAction),
    switchMap((request) => {
      return this.authService.login(request).pipe(
        map((currentUser: CurrentUser) => {
          this.persistenceService.set('token', currentUser.token);
          return loginSuccessAction({ currentUser });
        }),
        catchError((errResponse: HttpErrorResponse) => {
          return of(loginFailureAction({ errors: errResponse.error.errors }));
        }),
      )
    })
  ));

  // TODO реализуем редирект при успешном ответе
  redirectAfterLogin$ = createEffect(() => this.actions$.pipe(
    ofType(loginSuccessAction),
    tap(() => {
      this.router.navigate([`${this.path.home.url}`])
    }),
    ),
    { dispatch: false }
  );

}
