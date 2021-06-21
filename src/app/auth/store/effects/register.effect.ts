import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { registerAction, registerFailureAction, registerSuccessAction } from '../actions/register.action';

import { PersistenceService } from '../../../shared/services/persistence.service';

import { AuthService } from '../../services/auth.service';
import { CurrentUser } from '../../../shared/types/current-user.interface';
import { Router } from '@angular/router';

import { PATH } from 'src/app/shared/constants/path.constant';

@Injectable()
export class RegisterEffect {
  path: typeof PATH = PATH;

  register$ = createEffect(() => this.actions$
    .pipe(
      // фильтруем action
      ofType(registerAction),
      switchMap((request) => {
        return this.authService
          .register(request)
          .pipe(
            map((currentUser: CurrentUser) => {
              this.persistenceService.set('token', currentUser.token)
              return registerSuccessAction({ currentUser })
            }),
            catchError((err: HttpErrorResponse) => {
              return of(registerFailureAction({ errors: err.error.errors }));
            })
          );
      })
    ));

  redirectAfterSubmit$ = createEffect(() => this.actions$
      .pipe(
        ofType(registerSuccessAction),
        tap(() => this.router.navigate([`${this.path.start.url}`]))
      ),
    { dispatch: false });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService,
    private router: Router,
  ) {
  }
}
