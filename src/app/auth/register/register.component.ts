import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent
  implements OnInit {

  form: FormGroup;
  isReady = false;

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      username: [undefined, [Validators.required]],
      email: [undefined, [Validators.required, Validators.email]],
      password: [undefined, [Validators.required]],
    });

    this.changeIsReadyTo(true);
  }

  onSubmit(): void {
    // FIXME delete
    console.group('Class: RegisterComponent, Method: onSubmit, Line: 36, File: register.component.ts');
    console.log('this.form.valid():', this.form.valid);
    console.log('this.form.value:', this.form.value);
    console.groupEnd();
  }

  changeIsReadyTo(value: boolean): void {
    this.isReady = value;
  }

}
