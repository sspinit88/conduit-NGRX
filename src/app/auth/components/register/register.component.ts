import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
import { registerAction } from '../../store/actions/register.action';

import { InitStateValue } from '../../../shared/interfaces/initStateValue.interface';
import { FormCreate } from '../../../shared/interfaces/form-create.interfaces';
import { RegisterRequest } from '../../types/register-request.interface';
import { Auth } from '../../types/auth.interface';

import { BackendError } from '../../../shared/types/backend-error.interface';
import { PATH } from '../../../shared/constants/path.constant';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent
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

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    this.changeFormIsReadyTo(true);
  }

  initializeValue(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backEndErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(): void {
    const user: Auth = { ...this.form.value };
    const request: RegisterRequest = { user };

    this.store.dispatch(registerAction(request));
  }

  changeFormIsReadyTo(value: boolean): void {
    this.formIsReady = value;
  }

}
