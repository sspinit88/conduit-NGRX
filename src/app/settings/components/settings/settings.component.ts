import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs/internal/Observable';
import { pipe, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { select, Store } from '@ngrx/store';

import { currentUserSelector } from '../../../auth/store/selectors';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
import { updateCurrentUserAction } from '../../../auth/store/actions/uodate-current-user.action';

import { InitStateValue } from '../../../shared/interfaces/initStateValue.interface';
import { CurrentUser } from '../../../shared/types/current-user.interface';
import { BackendError } from '../../../shared/types/backend-error.interface';
import { CurrentUserInput } from '../../../shared/types/current-user-input.interface';
import { logoutAction } from '../../../auth/store/actions/sync.action';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent
  implements OnInit, OnDestroy, InitStateValue {

  form: FormGroup;

  currentUser: CurrentUser | null;
  subscription: Subscription;
  isSubmitting$: Observable<boolean>;
  errors$: Observable<BackendError | null>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.initializeValue();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  initializeValue(): void {
    this.subscription = this.store.pipe(select(currentUserSelector))
      .subscribe((currentUser: CurrentUser | null) => {
        this.currentUser = currentUser;
        if (this.currentUser != null) {
          this.initForm(this.currentUser);
        }
      });

    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.errors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initForm(currentUser: CurrentUser): void {
    this.form = this.fb.group({
      image: [currentUser.image || ''],
      username: [currentUser.username || ''],
      bio: [currentUser.bio || ''],
      email: [currentUser.email || ''],
      password: [''],
    });
  }

  onSubmit(): void {
    const currentUserInput: CurrentUserInput = {
      ...this.currentUser,
      ...this.form.value
    };

    this.store.dispatch(updateCurrentUserAction({ currentUserInput }));
  }

  logout(): void {
    this.store.dispatch(logoutAction());
  }
}
