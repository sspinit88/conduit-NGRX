import { FormGroup } from '@angular/forms';

export interface FormCreate {
  form: FormGroup

  formIsReady: boolean;

  initializeForm(): void;

  changeFormIsReadyTo(value: boolean): void;

  onSubmit(): void;
}
