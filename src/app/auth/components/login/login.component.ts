import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { loginAction } from '../../store/actions/login.action';

import { PATH } from '../../../shared/constants/path.constant';

import { FormCreate } from '../../../shared/interfaces/form-create.interfaces';
import { InitStateValue } from '../../../shared/interfaces/initStateValue.interface';
import { BackendError } from '../../../shared/types/backend-error.interface';
import { Auth } from '../../types/auth.interface';
import { LoginRequest } from '../../types/login.interface';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent
  implements OnInit,
    FormCreate,
    InitStateValue {

  form: FormGroup;
  formIsReady: boolean;

  isSubmitting$: Observable<boolean>;
  backEndErrors$: Observable<BackendError | null>;

  path: typeof PATH = PATH;

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.changeFormIsReadyTo(false);
    this.initializeForm();
    this.initializeValue();
  }

  initializeValue(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backEndErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    this.changeFormIsReadyTo(true);
  }

  changeFormIsReadyTo(value: boolean): void {
    this.formIsReady = value;
  }

  onSubmit(): void {
    const user: Auth = { ...this.form.value };
    const request: LoginRequest = { user };

    this.store.dispatch(loginAction(request));
  }

}
