import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { logoutAction } from '../actions/sync.action';
import { PersistenceService } from '../../../shared/services/persistence.service';
import { Router } from '@angular/router';

@Injectable()
export class LogoutEffect {

  constructor(
    private actions$: Actions,
    private service: PersistenceService,
    private router: Router,
  ) {
  }

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(logoutAction),
    tap(() => {
      this.service.set('token', '');
      this.router.navigate(['/']);
    }),
    ),
    { dispatch: false });

}
