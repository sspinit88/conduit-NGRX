import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { RegisterEffect } from './store/effects/register.effect';
import { LoginEffect } from './store/effects/login.effect';

import { BackendErrorMsgModule } from '../shared/components/backend-error-msg/beckend-error-msg.module';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

import { PATH } from '../shared/constants/path.constant';

const itemComponents = [
  RegisterComponent
];

const routes: Routes = [
  {
    path: PATH.register.url,
    component: RegisterComponent,
    data: { title: PATH.register.title }
  },
  {
    path: PATH.login.url,
    component: LoginComponent,
    data: { title: PATH.login.title }
  },
];

@NgModule({
  declarations: [
    ...itemComponents,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    BackendErrorMsgModule,
    StoreModule
      .forFeature('auth', reducers),
    EffectsModule
      .forFeature([
        RegisterEffect,
        LoginEffect,
      ]),
  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule {
}
